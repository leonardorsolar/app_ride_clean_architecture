Parece que você deseja criar um sistema de eventos para lidar com a criação de usuários e a criação de contas bancárias iniciais. Vou adaptar o código para demonstrar como você pode fazer isso usando as classes que você forneceu:

typescript
Copy code
// EventDispatcher.ts
export default class EventDispatcher {
private handlers: IHandler[];

constructor() {
this.handlers = [];
}

// Registre um manipulador de eventos
register(handler: IHandler) {
this.handlers.push(handler);
}

// Publique um evento para os manipuladores registrados
async publish(event: IDomainEvent) {
for (const handler of this.handlers) {
if (handler.name === event.name) {
await handler.handle(event);
}
}
}
}

// UserCreated.ts
export class UserCreated implements IDomainEvent {
name = 'UserCreated';
public dateTimeOccurred: Date;
eventData: any;

constructor(eventData: any) {
this.dateTimeOccurred = new Date();
this.eventData = eventData;
}
}

// CreateUserUseCase.ts
export default class CreateUserUseCase implements IUseCase {
constructor(
readonly usersRepository: IUsersRepository,
readonly encode?: IEncoder,
readonly eventDispatcher: EventDispatcher // Injete o EventDispatcher
) {}

async execute(request: CreateUserDTO): Promise<Response> {
// ... (seu código para criar o usuário)

    // Após criar o usuário, emita o evento UserCreated
    const userCreatedEvent = new UserCreated({ userId: user.id, /* outros dados do usuário */ });
    this.eventDispatcher.publish(userCreatedEvent);

    // Resto do código

}
}

// AccountCreationListener.ts
export default class AccountCreationListener {
constructor(readonly eventDispatcher: EventDispatcher, readonly createAccountUseCase: CreateAccountUseCase) {
// Registre o ouvinte para o evento UserCreated
this.eventDispatcher.register(this);
}

// Trate o evento UserCreated
async handle(event: IDomainEvent) {
if (event.name === 'UserCreated') {
const userId = event.eventData.userId;
// Crie a conta bancária inicial associada ao novo usuário
const accountId = await this.createAccountUseCase.createInitialAccount(userId);
console.log(`Conta bancária inicial criada para o usuário ${userId} com o ID da conta: ${accountId}`);
}
}
}
Neste código:

O EventDispatcher é usado para registrar manipuladores de eventos e publicar eventos para esses manipuladores.

A classe UserCreated representa o evento de criação de usuário.

No CreateUserUseCase, após criar um novo usuário, é emitido o evento UserCreated com os dados relevantes.

A classe AccountCreationListener atua como um ouvinte de eventos para o evento UserCreated. Ele se registra no EventDispatcher para ouvir eventos e, quando o evento UserCreated é detectado, cria a conta bancária inicial associada ao novo usuário.

Certifique-se de injetar o EventDispatcher no local apropriado e de que o ouvinte de eventos seja configurado no início do aplicativo para que ele possa ouvir eventos quando forem emitidos. Isso permite a comunicação entre os módulos de criação de usuário e criação de conta bancária com baixo acoplamento.
