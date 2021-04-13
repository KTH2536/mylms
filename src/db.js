import mongoose from "mongoose";
import { courseSchema } from "./models/Schemas";


mongoose.connect('mongodb://127.0.0.1:27017/mylms', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("We are connected!");
});

export const Course = mongoose.model('Course', courseSchema);
