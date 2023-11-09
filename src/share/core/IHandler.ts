import { IDomainEvent } from "../domain/events/IDomainEvent";


export default interface IHandler {
	name: string;
	handle(event: IDomainEvent): Promise<void>;
}
