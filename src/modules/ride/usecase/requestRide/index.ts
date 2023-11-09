// import { usersRepository } from '../../repos/index'

import { accountRepository } from "../../../account/repos";
import { rideRepository } from "../../repos";
import RequestRideUseCase from "./RequestRideUseCase";
import RequestRideUseCaseController from "./RequestRideUseCaseController";

// falta injetar o repository
const requestRideUseCase = new RequestRideUseCase(rideRepository, accountRepository);
// o GetUsersController depende do nosso GetUsersUseCase
const requestRideUseCaseController = new RequestRideUseCaseController(requestRideUseCase);

export { requestRideUseCaseController, requestRideUseCase };
