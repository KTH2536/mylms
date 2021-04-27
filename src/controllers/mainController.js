import { Course, User } from "../db";


export const home = async (req, res) => {
  console.log("home");
  const courses = await Course.find({});
  return res.render('main.pug', { courses });
};

export const getlogin = (req, res) => {
  return res.render('login.pug');
};

export const postlogin = async (req, res) => {
  console.log("Login Posted");
  const { id, password, username } = req.body;
  await User.create(
    id,
    password,
    username
  );
  return res.redirect('/');
}