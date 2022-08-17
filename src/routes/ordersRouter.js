import { Router } from "express";
import { getOrder, getOrderById, registerOrder } from "../controllers/ordersController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import ordersSchema from "../schemas/ordersSchemas.js";

const ordersRouter = Router();
ordersRouter.post("/orders", schemaValidation(ordersSchema), registerOrder);
ordersRouter.get("/orders", getOrder);
ordersRouter.get("/orders/:id", getOrderById);

export default ordersRouter;