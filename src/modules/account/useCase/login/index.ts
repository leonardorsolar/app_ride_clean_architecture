import { accountRepository } from "../../repos";
import LoginController from "./LoginController";
import SignupController from "./LoginController";
import LoginUseCase from "./LoginUseCase";
import SignupUseCase from "./LoginUseCase";

//const signupUseCase = new SignupUseCase(accountRepository, eventDispatcher, encoder);
const loginUseCase = new LoginUseCase(accountRepository);
const loginController = new LoginController(loginUseCase);

export { loginController, loginUseCase };
