import Position from "../domain/Position";

export default interface IPositionRepository {
  save(position: Position): Promise<void>;
  getByRideId(rideId: string): Promise<Position[]>;
}
