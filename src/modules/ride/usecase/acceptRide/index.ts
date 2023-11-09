// import { usersRepository } from '../../repos/index'

import { accountRepository } from "../../../account/repos";
import AccountGatewayHttp from "../../infra/gateway/AccountGatewayHttp";
import { rideRepository } from "../../repos";
import AcceptRideController from "./AcceptRideController";
import AcceptRideUseCase from "./AcceptRideUseCase";

const accountGatewayHttp = new AccountGatewayHttp();

const acceptRideUseCase = new AcceptRideUseCase(rideRepository, accountGatewayHttp);
const acceptRideController = new AcceptRideController(acceptRideUseCase);

export { acceptRideUseCase, acceptRideController };
