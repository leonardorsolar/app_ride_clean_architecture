import User from "../../../domain/User";
import { usersRepository } from "../../../repos";

describe("Infra: UserRepository", () => {
  test("Deve salvar um usuário no banco", async () => {
    //Give(dado que)
    //await userRepository.clean();
    //When (quando acontecer algo)
    //DTO
    let count = await usersRepository.count();
    count = count + 1;
    const id = count.toString();
    //console.log(id)
    // const dto = {
    //     name: "Leo",
    //     email: "leo01@gmail.com",
    //     password: "123456",
    //     id_user: id
    // };
    const user: User = User.create("leonardo", "leonardo@gmail.com", "123456").getValue() as User;
    const output = await usersRepository.save(user);
    //console.log(output)
  });
});
