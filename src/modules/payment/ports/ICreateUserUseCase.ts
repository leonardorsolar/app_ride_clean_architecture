// No módulo de origem (users):
export interface ICreateUserUseCase {
  execute(request: any): Promise<Response>;
}

// Para chamar um caso de uso (use case) de outro módulo em TypeScript
//e diminuir o acoplamento entre os módulos, você pode seguir a
//abordagem de injeção de dependência. Aqui está como você pode fazer isso:

// Exporte a interface do caso de uso desejado do módulo de origem.
//Isso permitirá que outros módulos acessem as definições do caso
//de uso sem conhecer a implementação real.

//No módulo de destino (contabancaria), importe a interface do caso de uso
//do módulo de origem e injete-o no construtor do caso de uso no módulo de destino.

// No módulo de destino (contabancaria):
// import { ICreateUserUseCase } from '../users'; // Importe a interface do caso de uso do módulo de origem.

// export default class CriarContaUseCase implements IUseCase {
//   constructor(
//     readonly contaBancariaRepository: IContaBancariaRepository,
//     readonly createUserUseCase: ICreateUserUseCase // Injete o caso de uso de criação de usuário
//   ) {}

//   async execute(request?: any): Promise<Response> {
//     try {
//       // ... Seu código ...

//       // Chame o caso de uso de criação de usuário do módulo de origem
//       const userCreationResult = await this.createUserUseCase.execute(request);

//       // ... Continue com o restante do código ...
//     } catch (error: any) {
//       return left(new AppError(`Erro ao criar a conta. Tente novamente ${error}`, 500));
//     }
//   }
// }
