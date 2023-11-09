// import AppError from "../../../../shared/infra/errors/AppError";
// import User from "../../domain/User";
// import ICreateUserDTO from "../../dtos/ICreateUserDTO";
// import IUsersRepository from "../IUsersRepository";

// export default class UsersRepositoryMemory implements IUsersRepository {
//   users: User[];

//   private static instance: UsersRepositoryMemory;

//   // somente a nossa classe vai poder instanciar
//   private constructor() {
//     this.users = [];
//   }
//   updateBypassword(password: string, id_user: string): Promise<User> {
//     throw new Error("Method not implemented.");
//   }

//   getById(id: string): Promise<User> {
//     throw new AppError("Method not implemented.", 401);
//   }
//   getByEmail(email: string): Promise<any> {
//     throw new AppError("Method not implemented.", 401);
//   }

//   public static getInstance(): UsersRepositoryMemory {
//     if (!UsersRepositoryMemory.instance) {
//       UsersRepositoryMemory.instance = new UsersRepositoryMemory();
//     }
//     return UsersRepositoryMemory.instance;
//   }

//   async save(data: ICreateUserDTO): Promise<User> {
//     const user = new User(data.name, data.email, data.password);
//     this.users.push(user);
//     return user;
//   }

//   async getAllUsers(): Promise<User[]> {
//     return this.users;
//   }

//   async count(): Promise<number> {
//     return this.users.length;
//   }

//   async getByName(name: string): Promise<User | undefined> {
//     const user = this.users.find((user) => user.name === name);
//     return user;
//   }
// }
