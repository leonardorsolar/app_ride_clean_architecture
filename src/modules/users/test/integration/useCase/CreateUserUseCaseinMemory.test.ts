import PgPromiseConnectionAdapter from "../../../../../shared/infra/database/PgPromiseConnectionAdapter";
import BcryptEncoder from "../../../infra/encoder/BcryptEncoder";
import UserRepositoryDatabase from "../../../repos/implementations/UserRepositoryDatabase";
//import UsersRepositoryMemory from "../../../repos/implementations/UsersRepositoryMemory";
import CreateUserUseCase from "../../../useCase/createUser/CreateUserUseCase";

const connection = new PgPromiseConnectionAdapter();

test.skip("Deve registar um usuário no sistema", async () => {
  //Give(dado que)
  //const usersRepository = new UsersRepositoryMemory();
  const encoder = new BcryptEncoder(5);
  //const createUser = new CreateUserUseCase(usersRepository, encoder);
  const request = {
    name: "Leo",
    email: "leo01@gmail.com",
    password: "123456",
  };
  //const output = await createUser.execute(request);
  // if (output.isFailure) {
  //   expect(output.isFailure).toBeTruthy();
  // } else {
  //   expect(output.isSuccess).toBeTruthy();
  // }
});
