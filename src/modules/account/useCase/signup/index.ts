import { accountRepository } from "../../repos";
import SignupController from "./SignupController";
import SignupUseCase from "./SignupUseCase";

//const signupUseCase = new SignupUseCase(accountRepository, eventDispatcher, encoder);
const signupUseCase = new SignupUseCase(accountRepository);
const signupController = new SignupController(signupUseCase);

export { signupController, signupUseCase };
