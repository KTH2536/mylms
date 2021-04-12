import express from 'express';
import morgan from 'morgan';
import mainRouter from './routers/mainRouter.js';
import courseRouter from './routers/courseRouter.js';

const logger = morgan('dev');
const app = express();

// middlewares
app.use(logger)
app.use(express.urlencoded({ extended: true }));

// application settings
app.set('view engine', 'pug');
app.set('views', process.cwd()+ '/src/views');

// routers
app.use('/', mainRouter);
app.use('/courses', courseRouter);

export default app;