import { usersRepository } from '../../repos/index'
import GetUsersController from "./GetUsersController";
import GetUsersUseCase from "./GetUsersUseCase";

const getUsersUseCase = new GetUsersUseCase(usersRepository);
// o GetUsersController depende do nosso GetUsersUseCase
const getUsersController = new GetUsersController(getUsersUseCase);

export { getUsersController, getUsersUseCase };
