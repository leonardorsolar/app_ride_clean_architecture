import IRideRepository from "../../repos/IRideRepository";

export default class StartRideUseCase {
  constructor(readonly rideRepository: IRideRepository) {}

  async execute(input: Input) {
    const ride = await this.rideRepository.getById(input.rideId);
    ride.start();
    await this.rideRepository.update(ride);
  }
}

type Input = {
  rideId: string;
};
