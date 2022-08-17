import { Router } from "express";
import { registerClient } from "../controllers/clientsController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import clientsSchema from "../schemas/clientsSchema.js";

const clientsRouter = Router();
clientsRouter.post("/clients", schemaValidation(clientsSchema), registerClient);

export default clientsRouter;