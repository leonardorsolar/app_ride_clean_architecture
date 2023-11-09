import { Response, Request } from "express";
import CreateUserDTO from "./ProcessPaymentDTO";
import { IUseCase } from "../../../../share/core/IUseCase";
import AppError from "../../../../share/core/AppError";

export default class ProcessPaymentController {
  constructor(readonly processPaymentUseCase: IUseCase) {}

  //Promise<Response>
  async handle(req: Request, res: Response): Promise<Response> {
    //const { name, email, password, created_at } = req.body;
    let dto: CreateUserDTO = req.body as CreateUserDTO;
    dto = {
      // ver: name: TextUtils.sanitize(dto.username),
      name: dto.name,
      email: dto.email,
      cpf: dto.cpf,
      isPassenger: dto.isPassenger,
      isDriver: dto.isDriver,
      carPlate: dto.carPlate,
      password: dto.password,
    };
    try {
      const requeredFiels = ["name", "email", "password"];
      for (const field of requeredFiels) {
        if (!req.body[field]) {
          throw new AppError(`Opss... O ${field} não foi informado. Tente novamente`, 400);
        }
      }
      const result = await this.processPaymentUseCase.execute(dto);
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
