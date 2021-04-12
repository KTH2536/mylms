import mongoose from "mongoose";

const { Schema } = mongoose;


export const courseSchema = new Schema({
  title: String,
  author: String, // On-display Owner Name
  owner: Object, // Owner_id
  createdAt: { type: Date, defuault: Date.now },
  hashtags: [{ type: String }]
});
