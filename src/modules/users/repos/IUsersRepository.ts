import User from "../domain/User";

// DTO => Data Transfer Object inserido na pasta DTO

export default interface IUsersRepository {
  save(data: any): Promise<User>;
  //save(user: User): Promise<void>
  //findByAllUser
  getAllUsers(): Promise<User[]>;
  count(): Promise<number>;
  getByName(name: string): Promise<User | undefined>;
  getByEmail(email: string): Promise<any>;
  getById(id: string): Promise<User>;
  updateBypassword(password: string, id_user: string): Promise<User>;
  updateByPermissionRole(id_user: string, permissions: any, roles: any): Promise<User>;
}
