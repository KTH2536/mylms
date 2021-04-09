import express from "express";
import { getLecture, getLectures, postLecture } from "../controllers/lectureControllers";

const lectureRouter = express.Router();

lectureRouter.get('/:id(\\d+)', getLectures);
lectureRouter.route('/:id(\\d+)/edit').get(getLecture).post(postLecture);

export default lectureRouter;