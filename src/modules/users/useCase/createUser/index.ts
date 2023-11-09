import EventDispatcher from "../../../../share/EventDispatcher/EventDispatcher";
import BcryptEncoder from "../../infra/encoder/BcryptEncoder";
import { usersRepository } from "../../repos";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

const encoder = new BcryptEncoder(5);
const eventDispatcher = new EventDispatcher();

const createUserUseCase = new CreateUserUseCase(usersRepository, eventDispatcher, encoder);
// o CreateUserController depende do nosso GetUsersUseCase
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, eventDispatcher, createUserUseCase };
