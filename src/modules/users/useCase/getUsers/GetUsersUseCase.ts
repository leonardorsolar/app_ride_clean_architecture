import { IUseCase } from "../../../../share/core/IUseCase";
import AppError from "../../../../share/core/AppError";
import User from "../../domain/User";
import IUsersRepository from "../../repos/IUsersRepository";
import { Either, left, right } from "../../../../share/core/either";
import { Result } from "../../../../share/core/Result";

type Response = Either<AppError, Result<User[]>>;

export default class GetUsersUseCase implements IUseCase {
  constructor(readonly usersRepository: IUsersRepository) {}

  async execute(): Promise<Response> {
    try {
      const users = await this.usersRepository.getAllUsers();
      return right(Result.ok<User[]>(users));
    } catch (error) {
      return left(new AppError(`Erro ao salvar no banco de dados. Tente novamente`, 500));
    }
  }
}
