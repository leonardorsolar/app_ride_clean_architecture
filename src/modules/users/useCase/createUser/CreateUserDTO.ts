// DTO => Data Transfer Object sendo usado no usecase
export default interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}
