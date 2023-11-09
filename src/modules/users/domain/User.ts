import { v4 as uuidv4 } from "uuid";
import UserEmail from "./UserEmail";
import UserId from "./UserId";
import UserName from "./UserName";
import UserPassword from "./UserPassword";
import { Result } from "../../../share/core/Result";

export default class User {
  private constructor(
    readonly name: UserName,
    readonly email: UserEmail,
    readonly password: UserPassword,
    readonly id_user?: UserId,
    readonly role?: string,
    readonly isAdminUser?: boolean,
    //accessToken?: JWTToken;
    //refreshToken?: RefreshToken;
    readonly created_at?: Date,
    readonly updatedAt?: Date,
    readonly isDeleted?: Date,
    readonly lastLogin?: Date
  ) {
    if (!this.role) {
      this.role = "user";
    }
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.email;
  }

  // factory method
  static create(name: string, email: string, password: string, id?: string): Result<User> {
    const emailOrError = UserEmail.create(email);
    if (emailOrError.isFailure) {
      return Result.fail<User>(`Opss. O e-mail digitado ${email} é inválido`);
    }
    const passwordOrError = UserPassword.create(password);
    if (passwordOrError.isFailure) {
      //return left(new InvalidPasswordError())
      return Result.fail<User>(`Opss. O password digitado ${password} é inválido`);
    }
    const nameOrError = UserName.create(name);
    if (nameOrError.isFailure) {
      return Result.fail<User>(`Opss. O nome digitado ${name} é inválido`);
    }
    const idOrError = UserId.create();
    if (idOrError.isFailure) {
      return Result.fail<User>(`Opss. Erro ao criar o ID`);
    }

    const nameObject: UserName = nameOrError.getValue() as UserName;
    const emailObject: UserEmail = emailOrError.getValue();
    const passwordObject: UserPassword = passwordOrError.getValue();
    const idObject: UserId = idOrError.getValue();

    const user = new User(nameObject, emailObject, passwordObject, idObject);

    // event
    //const isNewUser = !!user.id_user === false;

    // if (isNewUser) {
    //   user.addDomainEvent(new UserCreated(user));
    // }
    return Result.ok<User>(user);
  }
}
