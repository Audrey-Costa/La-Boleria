import { Router } from "express";
import { getClientOrders, registerClient } from "../controllers/clientsController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import clientsSchema from "../schemas/clientsSchema.js";

const clientsRouter = Router();
clientsRouter.post("/clients", schemaValidation(clientsSchema), registerClient);
clientsRouter.get("/clients/:id/orders", getClientOrders);

export default clientsRouter;