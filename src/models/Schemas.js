import mongoose from "mongoose";

const { Schema } = mongoose;


export const courseSchema = new Schema({
  title: { type: String, required: true, trim: true, maxLegnth: 28 },
  author: { type: String, required: true, trim: true, maxLength: 28 }, // On-display Owner Name
  owner: String, // Owner_id
  createdAt: { type: Date, default: Date.now },
  hashtags: [{ type: String }]
});

export const userSchema = new Schema({
  username: {type: String, required: true, maxLength: 12, minLength: 2},
  id: {type: String, required: true, maxLength: 28, minLength: 4 },
  password: {type: String, required: true, maxLength: 28, minLength: 8 },
  createdAt: {type: Date, default: Date.now },
  course: [{type: String}] // Course ID
});