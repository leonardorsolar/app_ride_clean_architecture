import RabbitMQAdapter from "../../infra/queue/RabbitMQAdapter";
import ProcessPaymentController from "./ProcessPaymentController";
import ProcessPaymentUseCase from "./ProcessPaymentUseCase";

const queue = new RabbitMQAdapter();

//const signupUseCase = new SignupUseCase(accountRepository, eventDispatcher, encoder);
const processPaymentUseCase = new ProcessPaymentUseCase(queue);
const processPaymentController = new ProcessPaymentController(processPaymentUseCase);

export { processPaymentController, processPaymentUseCase };
