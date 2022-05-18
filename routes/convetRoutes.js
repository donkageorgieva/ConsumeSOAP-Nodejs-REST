import { Router } from "express";
import {
  gramToOunce,
  kgToLb,
  lbToKg,
  ounceToGram,
} from "../controllers/convertController.js";

const convertRouter = Router();

convertRouter.get("/to-ounce/:grams", gramToOunce);
convertRouter.get("/to-gram/:ounces", ounceToGram);
convertRouter.get("/to-kg/:lbs", lbToKg);
convertRouter.get("/to-lb/:kgs", kgToLb);

export default convertRouter;
