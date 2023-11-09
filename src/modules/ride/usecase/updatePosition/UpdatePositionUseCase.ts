import Position from "../../domain/Position";
import IPositionRepository from "../../repos/IPositionRepository";
import IRideRepository from "../../repos/IRideRepository";

export default class UpdatePositionUseCase {
  constructor(readonly rideRepository: IRideRepository, readonly positionRepository: IPositionRepository) {}

  async execute(input: Input) {
    const ride = await this.rideRepository.getById(input.rideId);
    if (ride.getStatus() !== "in_progress") throw new Error();
    const position = Position.create(input.rideId, input.lat, input.long);
    await this.positionRepository.save(position);
  }
}

type Input = {
  rideId: string;
  lat: number;
  long: number;
};
