import { Result } from "../../../share/core/Result";
import { v4 as uuidv4 } from "uuid";

export default class UserId {
  public readonly value: string;

  constructor(id?: string) {
    if (id) {
      this.value = id;
    }
    if (!id) {
      this.value = uuidv4();
    }
  }

  public static create(id?: string): Result<UserId> {
    return Result.ok<UserId>(new UserId(id));
  }
}
