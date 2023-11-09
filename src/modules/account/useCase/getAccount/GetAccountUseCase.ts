import IAccountRepository from "../../repos/IAccountRepository";

export default class GetAccountUseCase {
  constructor(readonly accountRepository: IAccountRepository) {}

  async execute(accountId: string): Promise<Output> {
    const account = await this.accountRepository.getById(accountId);
    if (!account) throw new Error();
    return {
      accountId: account.accountId,
      name: account.name.getValue(),
      email: account.email.getValue(),
      cpf: account.cpf.getValue(),
      carPlate: account.carPlate.getValue(),
      isPassenger: account.isPassenger,
      isDriver: account.isDriver,
    };
  }
}

type Output = {
  accountId: string;
  name: string;
  email: string;
  cpf: string;
  carPlate: string;
  isPassenger: boolean;
  isDriver: boolean;
};
