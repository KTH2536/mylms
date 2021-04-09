import express from "express";
import { getLogin, handleHome, postLogin } from "../controllers/globalControllers";

const globalRouter = express.Router();

globalRouter.get('/', handleHome);
globalRouter.route('/login').get(getLogin).post(postLogin);

export default globalRouter;