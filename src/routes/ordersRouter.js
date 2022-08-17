import { Router } from "express";
import { getOrder, registerOrder } from "../controllers/ordersController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import ordersSchema from "../schemas/ordersSchemas.js";

const ordersRouter = Router();
ordersRouter.post("/orders", schemaValidation(ordersSchema), registerOrder);
ordersRouter.get("/orders", getOrder);

export default ordersRouter;