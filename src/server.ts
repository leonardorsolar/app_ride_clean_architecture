import express from "express";
import cors from "cors"; // Importando o pacote 'cors'

import bodyParser from "body-parser";
import { rideRota } from "./modules/ride/infra/http/routes/ride.rota";

//npm install express cors
//npm install express cors
//npm i --save-dev @types/cors
//npm install body-parser --save

const app = express();
const PORT = 3000;

// Configurando o uso do cors
app.use(cors());

// Configurando o body-parser para analisar solicitações JSON
app.use(bodyParser.json());

app.use(rideRota);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
