import express from "express";
import { home, getlogin, postlogin } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get('/', home);
mainRouter.route('/login').get(getlogin).post(postlogin);

export default mainRouter;