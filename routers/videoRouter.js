import express from 'express';
import routes from '../routes.js';

const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res) => res.send('video'));
videoRouter.get(routes.upload, (req, res) => res.send('upload'));
videoRouter.get(routes.videoDetail, (req, res) => res.send('video detail'));
videoRouter.get(routes.editVideo, (req, res) => res.send('edit video'));
videoRouter.get(routes.deleteVideo, (req, res) => res.send('delete video'));

export default videoRouter;