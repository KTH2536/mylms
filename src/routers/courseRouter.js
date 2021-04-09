import express from 'express';
import { watchCourse } from '../controllers/courseController';

const courseRouter = express.Router();

courseRouter.get('/:id(\\d+)', watchCourse);

export default courseRouter;