import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import express from 'express';
import userRouter from './routers/userRouter.js';
import videoRouter from './routers/videoRouter.js';
import globalRouter from './routers/globalRouter.js';
import routes from './routes.js';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("tiny"));


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;