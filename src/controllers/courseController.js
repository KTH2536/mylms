import { Course } from "../db";


export const getCourse = (req, res) => {
  return res.render('course.pug');
};

export const editCourse = (req, res) => {
  console.log("EDIT");
  return res.render('editCourse.pug');
};

export const postCourse = async (req, res) => {
  console.log("POSTED");
  const { title, author, hashtags } = req.body;
  await Course.create({
    title,
    author,
    hashtags: hashtags.trim().split(" ").map(str => `#${str}`)
  }).catch(err => res.status(501).send(`Request Rejected ${err}`));
  return res.redirect('/');
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  let doc = await Course.findOne({ _id: id });
  await doc.remove();
  console.log(doc);
  return res.redirect('/');
};