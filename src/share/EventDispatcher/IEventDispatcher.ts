import IHandler from "../core/IHandler";
import { IDomainEvent } from "../domain/events/IDomainEvent";

export default interface IEventDispatcher {
  //private eventHandlers: { [eventName: string]: IHandler[]} = {}

  //register(eventName: string, handler: Handler): void
  register(handler: IHandler): void;
  //notify(event: IDomainEvent): void
  publish(event: IDomainEvent): void;
}
