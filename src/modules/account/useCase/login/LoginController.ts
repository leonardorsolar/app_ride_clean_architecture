import { Response, Request } from "express";
import CreateUserDTO from "./LoginDTO";
import { IUseCase } from "../../../../share/core/IUseCase";
import AppError from "../../../../share/core/AppError";

export default class LoginController {
  constructor(readonly loginUseCase: IUseCase) {}

  //Promise<Response>
  async handle(req: Request, res: Response): Promise<Response> {
    //const { name, email, password, created_at } = req.body;
    let dto: CreateUserDTO = req.body as CreateUserDTO;
    dto = {
      // ver: name: TextUtils.sanitize(dto.username),
      email: dto.email,
      password: dto.password,
      date: new Date(),
    };
    try {
      const requeredFiels = ["email", "password"];
      for (const field of requeredFiels) {
        if (!req.body[field]) {
          throw new AppError(`Opss... O ${field} não foi informado. Tente novamente`, 400);
        }
      }
      const result = await this.loginUseCase.execute(dto);
      console.log("controle");
      console.log(result);
      if (result.isLeft()) {
        const error = result.value;
        //badRequest
        console.log(error);
        return res.status(error.statusCode).json(error.message);
      } else {
        return res.status(201).json(result.value);
      }
    } catch (error) {
      throw new AppError(`Erro inesperado do sistema ${error}`, 500);
    }
  }
}
