import { accountRepository } from "../../repos";
import GetAccountController from "./GetAccountController";
import GetAccountUseCase from "./GetAccountUseCase";

const getAccountUseCase = new GetAccountUseCase(accountRepository);
// o GetUsersController depende do nosso GetUsersUseCase
const getAccountController = new GetAccountController(getAccountUseCase);

export { getAccountController, getAccountUseCase };
