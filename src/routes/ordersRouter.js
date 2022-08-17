import { Router } from "express";
import { registerOrder } from "../controllers/ordersController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import ordersSchema from "../schemas/ordersSchemas.js";

const ordersRouter = Router();
ordersRouter.post("/orders", schemaValidation(ordersSchema), registerOrder)

export default ordersRouter;