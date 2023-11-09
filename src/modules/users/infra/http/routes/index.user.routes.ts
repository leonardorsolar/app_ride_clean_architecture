import { Router } from "express";
import { ensureAdmin } from "../../../../../shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "../../../../../shared/infra/http/middlewares/ensureAuthenticated";
import { createUserController } from "../../../useCase/createUser";
import { getUsersController } from "../../../useCase/getUsers";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  return res.json({ message: "Router module users - usersRouter" });
});

usersRouter.get("/list", (req, res) => getUsersController.handle(req, res));
usersRouter.post("/", (req, res) => createUserController.handle(req, res));


// userRouter.get('/me',
//   middleware.ensureAuthenticated(),
//   (req, res) => getCurrentUserController.execute(req, res)
// )

// userRouter.post('/login',
//   (req, res) => loginController.execute(req, res)
// )

// userRouter.post('/logout',
//   middleware.ensureAuthenticated(),
//   (req, res) => logoutController.execute(req, res)
// )

// userRouter.post('/token/refresh',
//   (req, res) => refreshAccessTokenController.execute(req, res)
// )

// userRouter.delete('/:userId',
//   middleware.ensureAuthenticated(),
//   (req, res) => deleteUserController.execute(req, res)
// )

// userRouter.get('/:username',
//   middleware.ensureAuthenticated(),
//   (req, res) => getUserByUserNameController.execute(req, res)
// )


export { usersRouter };
