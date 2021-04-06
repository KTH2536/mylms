import express from 'express';
import routes from '../routes.js';

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send('users'));
userRouter.get(routes.userDetaile, (req, res) => res.send('user detaile'));
userRouter.get(routes.editProfile, (req, res) => res.send('edit profile'));
userRouter.get(routes.changePassword, (req, res) => res.send('change password'));

export default userRouter;