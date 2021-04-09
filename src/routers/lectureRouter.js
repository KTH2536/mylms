import express from "express";
import { editLectures, getLecture, getUpload, postCourse, postUpload } from "../controllers/lectureControllers";
import courseRouter from './courseRouter.js';

const lectureRouter = express.Router();


lectureRouter.use('/:id(\\d+)/courses/:id(\\d+)', courseRouter);

lectureRouter.route('/upload').get(getUpload).post(postUpload);
lectureRouter.get('/:id(\\d+)', getLecture);
lectureRouter.route('/:id(\\d+)/edit').get(editLectures).post(postCourse);

export default lectureRouter;