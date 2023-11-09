// DTO => Data Transfer Object sendo usado no usecase
export default interface SignupDTO {
  name: string;
  email: string;
  cpf: string;
  isPassenger: boolean;
  isDriver: boolean;
  carPlate: string;
  password?: string;
}
