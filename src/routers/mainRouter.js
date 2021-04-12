import express from "express";
import { home, login } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get('/', home);
mainRouter.route('/login').get(login);

export default mainRouter;