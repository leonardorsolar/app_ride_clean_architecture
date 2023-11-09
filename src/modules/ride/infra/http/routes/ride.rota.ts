import { Router } from "express";
import { requestRideUseCaseController } from "../../../usecase/requestRide";

const rideRota = Router();

rideRota.get("/", (req, res) => {
  res.json({ message: "Router module corrida de taxi - ride" });
});

rideRota.post("/", async (req, res) => requestRideUseCaseController.handle(req, res));

// rideRota.get("/list", async (req, res) => {
//   try {
//     const contas = await obterContasController.handle(req, res);
//     res.json(contas);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// rideRota.post("/", async (req, res) => criarContaController.handle(req, res));
// rideRota.post("/contaId", async (req, res) => realizarDepositoController.handle(req, res));
// rideRota.post("/saldoId", async (req, res) => obterSaldoDaContaController.handle(req, res));
// rideRota.post("/historico", async (req, res) => obterHistoricoContaController.handle(req, res));

export { rideRota };
