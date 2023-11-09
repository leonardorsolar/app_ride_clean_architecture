import { Result } from "../../../share/core/Result";

export default class UserPassword {
  readonly value: string;

  private constructor(password: string) {
    this.value = password;
  }

  getPassword(): string {
    return this.value;
  }

  private static isValidPassword(password: string): boolean {
    if (!password) {
      return false;
    }

    if (this.noNumberIn(password) || this.tooShort(password)) {
      return false;
    }

    return true;
  }

  private static noNumberIn(password: string) {
    return !/\d/.test(password);
  }

  private static tooShort(password: string) {
    return password.length < 6;
  }

  public static create(password: string): Result<UserPassword> {
    if (!this.isValidPassword(password)) {
      return Result.fail<UserPassword>(`Opss... O nome ${password} é inválido`);
    } else {
      return Result.ok<UserPassword>(new UserPassword(password));
    }
  }
}
