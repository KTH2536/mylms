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
  await new Course.create({
    title,
    author,
    hashtags: hashtags.split(" ").map(str => `#${str}`)
  });
  console.log(course);
  return res.redirect('/');
};

export const deleteCourse = async (req, res) => {
  const { _id } = req.params;
  Course.Remove(Query.EQ("_id", _id));
  return res.redirect('/');
};