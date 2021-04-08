import express from "express";
import { handleHome } from "../controllers/globalControllers";

const globalRouter = express.Router();

globalRouter.get('/', handleHome);

export default globalRouter;