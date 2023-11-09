import { Result } from "../../../share/core/Result";

export default class UserName {
  public readonly value: string;

  private constructor(Name: string) {
    this.value = Name;
    Object.freeze(this);
  }

  private static isValidName(Name: string): boolean {
    if (this.emptyOrTooLittle(Name) || this.tooLarge(Name)) {
      return false;
    }

    return true;
  }

  private static emptyOrTooLittle(Name: string): boolean {
    return !Name || Name.trim().length < 3;
  }

  private static tooLarge(Name: string): boolean {
    return Name.length > 256;
  }

  public static create(name: string): Result<UserName> {
    if (!this.isValidName(name)) {
      return Result.fail<UserName>(`Opss... O nome ${name} é inválido`);
    } else {
      return Result.ok<UserName>(new UserName(name));
    }
  }
}

function valid(Name: string): boolean {
  if (emptyOrTooLittle(Name) || tooLarge(Name)) {
    return false;
  }

  return true;
}

function emptyOrTooLittle(Name: string): boolean {
  return !Name || Name.trim().length < 3;
}

function tooLarge(Name: string): boolean {
  return Name.length > 256;
}
