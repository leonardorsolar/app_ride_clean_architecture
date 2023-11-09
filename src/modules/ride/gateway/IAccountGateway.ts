import Account from "../../account/domain/Account";

export default interface IAccountGateway {
  save(account: Account): Promise<void>;
  getByEmail(email: string): Promise<Account | undefined>;
  getById(accountId: string): Promise<Account | undefined>;
}
