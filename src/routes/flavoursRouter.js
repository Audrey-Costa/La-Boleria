import { Router } from "express";
import { registerFlavour } from "../controllers/flavoursController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import flavoursSchema from "../schemas/flavoursSchemas.js";

const flavoursRouter = Router();
flavoursRouter.post("/flavours", schemaValidation(flavoursSchema), registerFlavour);

export default flavoursRouter;