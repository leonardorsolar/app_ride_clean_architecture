import { getAccountController } from "../../../account/useCase/getAccount";
import IAccountGateway from "../../gateway/IAccountGateway";
import express from "express";
const app = express();

export default class AccountGatewayHttp implements IAccountGateway {
  constructor() {}

  async getById(accountId: string): Promise<any> {
    return app.post(`http://localhost:3000/accounts/${accountId}`);
  }

  async signup(input: any): Promise<any> {
    return app.post("http://localhost:3000/signup", input);
  }
}
