//import UsersRepositoryMemory from "./implementations/UsersRepositoryMemory";

import { connection } from "../../../share/database";
import AccountRepositoryDatabase from "./implementations/AccountRepositoryDatabase";

const accountRepository = new AccountRepositoryDatabase(connection);
//const usersRepository = UsersRepositoryMemory.getInstance();
// o UseCase depende do nosso repositório

export { accountRepository };
