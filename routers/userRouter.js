import express from 'express';
import routes from '../routes.js';

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send('users'));
userRouter.get(routes.userDetail, (req, res) => res.send('user detail'));
userRouter.get(routes.editProfile, (req, res) => res.send('edit profile'));
userRouter.get(routes.changePassword, (req, res) => res.send('change password'));

export default userRouter;