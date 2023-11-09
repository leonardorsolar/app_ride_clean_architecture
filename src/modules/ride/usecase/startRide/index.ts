import { rideRepository } from "../../repos";
import StartRideController from "./StartRideController";
import StartRideUseCase from "./StartRideUseCase";

const startRideUseCase = new StartRideUseCase(rideRepository);
const startRideController = new StartRideController(startRideUseCase);

export { startRideController, startRideUseCase };
