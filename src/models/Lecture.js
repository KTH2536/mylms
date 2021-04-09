import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    title: String,
    owner: Number,
    begin: Date,
    due: Date
})

const Lecture = mongoose.model("Lecture", lectureSchema);
export default Lecture;
