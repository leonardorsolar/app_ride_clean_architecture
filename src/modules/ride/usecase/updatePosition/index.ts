import { positionRepository, rideRepository } from "../../repos";
import UpdatePositionController from "./UpdatePositionController";
import UpdatePositionUseCase from "./UpdatePositionUseCase";

const updatePositionUseCase = new UpdatePositionUseCase(rideRepository, positionRepository);
const updatePositionController = new UpdatePositionController(updatePositionUseCase);
export { updatePositionController, updatePositionUseCase };
