import IHandler from "../core/IHandler";
import { IDomainEvent } from "../domain/events/IDomainEvent";

//EventDispatcher é usado para registrar manipuladores de eventos e publicar eventos para esses manipuladores.
export default class EventDispatcher {
  handlers: IHandler[];
  //eventHandlers: { [eventName: string]: IHandler[]} = {}

  constructor() {
    this.handlers = [];
  }

  getEventHandlers(): IHandler[] {
    return this.handlers;
  }

  //// Registre um manipulador de eventos
  //register(eventName: string, handler: Handler): void
  register(handler: IHandler) {
    this.handlers.push(handler);
    // console.log("3.1 registerando o handler");
    // console.log(this.handlers);
  }

  //// Publique um evento para os manipuladores registrados
  async publish(event: IDomainEvent) {
    //console.log("4.1 instancia do evento publicado");
    //console.log(event);
    for (const handler of this.handlers) {
      //console.log("5.1 comparando handler.name === event.name");
      // console.log(handler.name);
      //console.log(event.name);
      if (handler.name === event.name) {
        // console.log("5.2 Executo método handler, passando o evento");
        await handler.handle(event);
      }
    }
  }
}

// const mediator = new Mediator();
// console.log(mediator);
