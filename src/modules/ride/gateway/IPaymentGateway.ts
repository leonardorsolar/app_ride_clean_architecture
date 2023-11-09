export default interface IPaymentGateway {
  process(input: any): Promise<any>;
}
