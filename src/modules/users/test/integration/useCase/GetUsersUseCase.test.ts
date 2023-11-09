import PgPromiseConnectionAdapter from "../../../../../shared/infra/database/PgPromiseConnectionAdapter";
import UserRepositoryDatabase from "../../../repos/implementations/UserRepositoryDatabase";
import GetUsersUseCase from "../../../useCase/getUsers/GetUsersUseCase";

describe("Application: usecase get User", () => {
  const connection = new PgPromiseConnectionAdapter();

  test("Deve listar todos os usuários do sistema", async () => {
    //Give(dado que)
    const userRepository = new UserRepositoryDatabase(connection);
    const getUser = new GetUsersUseCase(userRepository);
    //When (quando acontecer algo)
    const output = await getUser.execute();
    const count = await userRepository.count();
    // Right { value: Result
    //console.log(output);
    // result
    //console.log(output.isRight);
    expect(output.isRight).toBeTruthy();
  });
});
