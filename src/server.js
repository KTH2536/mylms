import express from "express";
import morgan from "morgan";
import cors from "cors";
import globalRouter from "./routers/globalRouter.js";
import videoRouter from "./routers/videoRouter.js";

const app = express();
const logger = morgan('dev');
const PORT = 3000;


// Application Settings
app.set("view engine", "pug");
app.set("views", process.cwd()+'/src/views');


// Middlewares
app.use(cors());
app.use(logger);
app.use('/', globalRouter);
app.use('/lectures', videoRouter);

app.listen(PORT, (req, res) => console.log(`Listening at: http://localhost:${PORT}`));