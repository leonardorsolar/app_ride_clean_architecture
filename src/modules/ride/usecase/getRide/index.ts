import { accountRepository } from "../../../account/repos";
import { rideRepository } from "../../repos";
import GetRideController from "./GetRideController";
import GetRideUseCase from "./GetRideUseCase";

const getRideUseCase = new GetRideUseCase(rideRepository, accountRepository);
const getRideController = new GetRideController(getRideUseCase);
export { getRideController, getRideUseCase };
