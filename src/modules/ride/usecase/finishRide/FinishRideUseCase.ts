import Queue from "../../../payment/infra/queue/Queue";
import RabbitMQAdapter from "../../../payment/infra/queue/RabbitMQAdapter";
import PaymentGateway from "../../gateway/IPaymentGateway";
import PaymentGatewayHttp from "../../infra/gateway/PaymentGatewayHttp";
import IPositionRepository from "../../repos/IPositionRepository";
import IRideRepository from "../../repos/IRideRepository";

export default class FinishRideUseCase {
  constructor(
    readonly rideRepository: IRideRepository,
    readonly positionRepository: IPositionRepository,
    readonly paymentGateway: PaymentGateway = new PaymentGatewayHttp(),
    readonly queue: Queue = new RabbitMQAdapter()
  ) {}

  async execute(input: Input) {
    const ride = await this.rideRepository.getById(input.rideId);
    const positions = await this.positionRepository.getByRideId(input.rideId);
    ride.finish(positions);
    // await this.paymentGateway.process({ rideId: ride.rideId, fare: ride.getFare() });
    await this.rideRepository.update(ride);
    await this.queue.publish("rideFinished", { rideId: ride.rideId, fare: ride.getFare() });
  }
}

type Input = {
  rideId: string;
};
