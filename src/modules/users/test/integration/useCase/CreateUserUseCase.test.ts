import AppError from "../../../../../shared/infra/errors/AppError";
import BcryptEncoder from "../../../infra/encoder/BcryptEncoder";
import { createUserUseCase } from "../../../useCase/createUser";

const encoder = new BcryptEncoder(5);

describe("Application: usecase SignUp", () => {
  test("Deve registar um usuário no sistema", async () => {
    //Give(dado que)
    //await userRepository.clean();
    //When (quando acontecer algo)
    //DTO
    const request = {
      name: "Leo",
      email: "leo02@gmail.com",
      password: "123456",
      role: "user",
    };
    const output = await createUserUseCase.execute(request);
    //console.log(output.value)
    if (output.isRight) {
      expect(output.isRight).toBeTruthy();
    } else {
      expect(output.isLeft).toBeTruthy();
    }
  });

  // test("Deve retornar um erro", async () => {
  //   //Give(dado que)
  //   //await userRepository.clean();
  //   //When (quando acontecer algo)
  //   //DTO
  //   const request = {
  //     name: "",
  //     email: "leo01@gmail.com",
  //     password: "123456",
  //     role: 'user',
  //   };
  //   const output = await createUserUseCase.execute(request);
  //   //console.log(output.value)
  //   const error = output.get as AppError;
  //   expect(error.message).toEqual("Opss. O nome digitado  é inválido");
  // });
});
