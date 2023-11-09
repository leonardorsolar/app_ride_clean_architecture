import IHandler from "../../../../../share/core/IHandler";
import User from "../../../domain/User";
import { UserCreated } from "../../../domain/events/UserCreated";

export default class UserCreatedHandler implements IHandler {
  name = "UserCreated";

  //constructor() {}

  async handle(event: UserCreated): Promise<void> {
    //console.log("Evento executado ");
    console.log("Salvanso o evento: ", event);
  }
}

// const userCreatedHandler = new UserCreatedHandler();
// console.log(userCreatedHandler);
