import { accountRepository } from "../../../account/repos";
import { positionRepository, rideRepository } from "../../repos";

import FinishRideController from "./FinishRideController";
import FinishRideUseCase from "./FinishRideUseCase";

const finishRideUseCase = new FinishRideUseCase(rideRepository, positionRepository);
const finishRideController = new FinishRideController(finishRideUseCase);
export { finishRideController, finishRideUseCase };
