import express from "express";
import { home, getlogin, postlogin, getregister, postregister } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get('/', home);
mainRouter.route('/login').get(getlogin).post(postlogin);
mainRouter.route('/register').get(getregister).post(postregister);

export default mainRouter;