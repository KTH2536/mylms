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
  const { id, password } = req.body;
  console.log(id, password);
  let doc = await User.findOne({ "username": id });
  if (doc.password == password) {
    console.log("Login success");
  }
  else {
    console.log("Login fail");
  }
  return res.redirect('/');
}

export const getregister = (req, res) => {
  return res.render('register.pug');
}

export const postregister = async (req, res) => {
  console.log("Register try");
  const { userid, password, username } = req.body;
  console.log(userid, password, username);
  await User.create({
    username,
    id,
    password
  });
  return res.redirect('/');
}
