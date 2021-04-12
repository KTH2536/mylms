import express from 'express';
import { deleteCourse, editCourse, getCourse, postCourse } from '../controllers/courseController';

const courseRouter = express.Router();

courseRouter.route('/:id(\\d+)').get(getCourse).delete(deleteCourse);
courseRouter.route('/edit').get(editCourse).post(postCourse);

export default courseRouter;