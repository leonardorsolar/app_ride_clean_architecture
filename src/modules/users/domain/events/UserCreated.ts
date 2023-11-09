import { IDomainEvent } from "../../../../share/domain/events/IDomainEvent";
import User from "../User";

//Primeiro, defina uma classe de evento para representar o evento de criação de usuário:
//depois: vamos atualizar o caso de uso de criação de usuário para emitir esse evento:
export class UserCreated implements IDomainEvent {
  name = "UserCreated";
  public dateTimeOccurred: Date;
  //public user: User;
  eventData: any;

  // constructor(user: User) {
  constructor(eventData: any) {
    this.dateTimeOccurred = new Date();
    this.eventData = eventData;
    // this.user = user;
    //console.log("instanciado o evento UserCreated");
  }
}

// const user = User.create("leoa", "leoa@gmail.com.br", "123456");
// const userCreated = new UserCreated(user);
// console.log(userCreated);
// console.log(userCreated.eventData._value);
