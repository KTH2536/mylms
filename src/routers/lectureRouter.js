import express from "express";
import { handleCourse, handleLectures } from "../controllers/lectureControllers";

const lectureRouter = express.Router();

lectureRouter.get('/:id(\\d+)', handleLectures);
lectureRouter.get('/:id(\\d+)/course', handleCourse);

export default lectureRouter;