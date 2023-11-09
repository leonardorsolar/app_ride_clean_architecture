import { v4 as uuidv4 } from "uuid";

export default class UserToken {
  constructor(readonly id_user: string, readonly token?: string, readonly expires_date?: Date, readonly refresh_token?: string, readonly created_at?: Date, readonly id?: string) {
    if (!this.id_user) {
      this.token = uuidv4();
    }
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
