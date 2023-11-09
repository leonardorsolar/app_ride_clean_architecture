import { Router } from "express";
import { processPaymentController } from "../../../useCase/processPayment";

const paymentRouter = Router();

paymentRouter.get("/", (req, res) => {
  return res.json({ message: "Router module payment - paymentRouter" });
});

paymentRouter.post("//process_payment", (req, res) => processPaymentController.handle(req, res));

export { paymentRouter };
