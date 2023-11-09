import IConnection from "../../../../share/database/IConnection";
import User from "../../domain/User";
import IUsersRepository from "../IUsersRepository";

export default class UserRepositoryDatabase implements IUsersRepository {
  constructor(readonly connection: IConnection) {}

  async updateBypassword(password: string, id_user: string): Promise<User> {
    const [user] = await this.connection.query("update schema_users.users set password = $1 where id_user = $2 returning  *", [password, id_user]);
    return user;
  }

  async getById(id: string): Promise<User> {
    const [user] = await this.connection.query("select * from schema_users.users where id_user = $1", [id]);
    return user;
  }

  async getByEmail(email: string): Promise<any> {
    const [UserData] = await this.connection.query("select * from schema_users.users where email = $1", [email]);
    return UserData;
  }

  async save(user: User): Promise<User> {
    const [userData] = await this.connection.query("insert into schema_users.users (id_user, name, email, password) values ($1, $2, $3, $4) returning  *", [
      user.id_user,
      user.name,
      user.email,
      user.password,
    ]);
    console.log(userData);
    return userData;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.connection.query("select * from schema_users.users", []);
    return users;
  }

  async count(): Promise<number> {
    const [row] = await this.connection.query("select count(*)::int as count from schema_users.users", []);
    return row.count;
  }

  async getByName(name: string): Promise<User | undefined> {
    const [UserData] = await this.connection.query("select * from schema_users.users where name = $1", [name]);
    return UserData;
  }

  async updateByPermissionRole(id_user: string, permissions: any, roles: any): Promise<any> {
    //const [user] = await this.connection.query("update users.users set password = $1 where id_user = $2 returning  *", [password, id_user]);
    //return user;
  }

  // return {
  //     email: dbUser.email,
  //     password: dbUser.password,
  //     id: dbUser._id.toString()
  //   }
}

// async findByAllUser(): Promise<User[]> {
//   const users = await this.connection.query("select * from auth.users", []);
//   return users
// }
