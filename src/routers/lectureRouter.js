import express from "express";
import { handleAddcourse, handleLectures } from "../controllers/lectureControllers";

const lectureRouter = express.Router();

lectureRouter.get('/:id(\\d+)', handleLectures);
lectureRouter.get('/:id(\\d+)/add', handleAddcourse);

export default lectureRouter;