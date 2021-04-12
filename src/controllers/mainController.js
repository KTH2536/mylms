import { Course } from "../db";


export const home = async (req, res) => {
  console.log("home");
  const courses = await Course.find({});
  return res.render('main.pug', { courses });
};

export const login = (req, res) => {
  console.log("blabla");
  return res.render('main.pug');
};
