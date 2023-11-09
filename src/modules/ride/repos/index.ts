//import UsersRepositoryMemory from "./implementations/UsersRepositoryMemory";

import { connection } from "../../../share/database";
import PositionRepositoryDatabase from "./implementations/PositionRepositoryDatabase";
import RideRepositoryDatabase from "./implementations/RideRepositoryDatabase";

const rideRepository = new RideRepositoryDatabase(connection);
const positionRepository = new PositionRepositoryDatabase(connection);

export { rideRepository, positionRepository };
