import { Router } from "express";
import { registerCake } from "../controllers/cakesController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import cakesSchema from "../schemas/cakesSchema.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", schemaValidation(cakesSchema), registerCake)

export default cakesRouter;