import express from 'express';
import { deleteCourse, editCourse, getCourse, postCourse } from '../controllers/courseController';

const courseRouter = express.Router();

courseRouter.route('/:id([0-9a-f]{24})').get(getCourse);
courseRouter.route('/:id([0-9a-f]{24})/delete').post(deleteCourse);
courseRouter.route('/edit').get(editCourse).post(postCourse);

export default courseRouter;