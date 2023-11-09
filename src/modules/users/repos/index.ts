//import UsersRepositoryMemory from "./implementations/UsersRepositoryMemory";

import { connection } from "../../../share/database";
import UserRepositoryDatabase from "./implementations/UserRepositoryDatabase";

const usersRepository = new UserRepositoryDatabase(connection);
//const usersRepository = UsersRepositoryMemory.getInstance();
// o UseCase depende do nosso repositório

export { usersRepository };
