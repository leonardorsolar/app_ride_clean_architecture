import { Result } from "../../../share/core/Result";

export default class UserEmail {
  readonly value: string;

  private constructor(email: string) {
    this.value = email;
  }

  getEmail(): string {
    return this.value;
  }

  private static isValidEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  private static format(email: string): string {
    return email.trim().toLowerCase();
  }

  static create(email: string): Result<UserEmail> {
    if (!this.isValidEmail(email)) {
      return Result.fail<UserEmail>(`Opss... O e-mail ${email} é inválido`);
    } else {
      return Result.ok<UserEmail>(new UserEmail(this.format(email)));
    }
  }
}
