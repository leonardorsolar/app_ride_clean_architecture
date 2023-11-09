import { Router } from "express";
import { signupController } from "../../../useCase/signup";
import { getAccountController } from "../../../useCase/getAccount";

const accountRouter = Router();

accountRouter.get("/", (req, res) => {
  return res.json({ message: "Router module users - usersRouter" });
});

accountRouter.post("/signup", (req, res) => signupController.handle(req, res));
accountRouter.get("/accounts/:accountId", (req, res) => getAccountController.handle(req, res));

export { accountRouter };
