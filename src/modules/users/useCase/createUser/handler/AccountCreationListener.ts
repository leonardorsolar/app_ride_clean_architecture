import EventDispatcher from "../../../../../share/EventDispatcher/EventDispatcher";
import IHandler from "../../../../../share/core/IHandler";
import { IDomainEvent } from "../../../../../share/domain/events/IDomainEvent";
import CriarContaUseCase from "../../../../ride/usecase/criarConta/CriarContaUseCase";

export default class AccountCreationListener implements IHandler {
  name = "userCreated"; // Defina o nome do evento que este listener está tratando

  constructor(readonly eventDispatcher: EventDispatcher, readonly createAccountUseCase: CriarContaUseCase) {
    // Registre o ouvinte para o evento 'userCreated'
    // Registre o ouvinte para o evento 'userCreated'
    this.eventDispatcher.register(this); // Use .bind(this) para manter o contexto do this
  }

  // Trate o evento UserCreated
  async handle(event: IDomainEvent) {
    // Verifique se o nome do evento corresponde ao nome que este listener está tratando
    if (event.name === this.name) {
      const userId = event.eventData.userId;
      // Crie a conta bancária inicial associada ao novo usuário
      const accountId = await this.createAccountUseCase.execute(userId);
      console.log(`Conta bancária inicial criada para o usuário ${userId} com o ID da conta: ${accountId}`);
    }
  }

  startListening() {
    // Não é mais necessário registrar o listener no construtor
  }
}

// AccountCreationListener.ts
// export default class AccountCreationListener {
//   constructor(readonly eventDispatcher: EventDispatcher, readonly createAccountUseCase: CriarContaUseCase) {
//     // Registre o ouvinte para o evento UserCreated
//     this.eventDispatcher.register(this);
//   }

//   // Trate o evento UserCreated
//   async handle(event: IDomainEvent) {
//     if (event.name === "UserCreated") {
//       const userId = event.eventData.userId;
//       // Crie a conta bancária inicial associada ao novo usuário
//       const accountId = await this.createAccountUseCase.execute(userId);
//       console.log(`Conta bancária inicial criada para o usuário ${userId} com o ID da conta: ${accountId}`);
//     }
//   }
// }
