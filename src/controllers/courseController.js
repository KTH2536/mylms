import { Course } from "../db";


export const getCourse = (req, res) => {
  return res.render('course.pug');
};

export const editCourse = (req, res) => {
  console.log("EDIT");
  return res.render('editCourse.pug');
};

export const postCourse = async (req, res) => {
  let date = new Date()
  console.log("POSTED");
  const { title, author, hashtags } = req.body;
  await Course.create({
    title,
    author,
    createdAt: `${date.getFullYear()}년 ${date.getMonth() < 9 ? '0' + (date.getMonth()+1) : date.getMonth()}/${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
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