import express from "express";
import { handleLectures } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get('/:id(\\d)', handleLectures);

export default videoRouter;