import express from "express";
import IPaymentGateway from "../../gateway/IPaymentGateway";
const app = express();

export default class PaymentGatewayHttp implements IPaymentGateway {
  constructor() {}

  async process(input: any): Promise<any> {
    return app.post(`http://localhost:3002/process_payment`, input);
  }
}
