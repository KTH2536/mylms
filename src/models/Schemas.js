import mongoose from "mongoose";

const { Schema } = mongoose;


export const courseSchema = new Schema({
  title: { type: String, required: true, trim: true, maxLegnth: 28 },
  author: { type: String, required: true, trim: true, maxLength: 28 }, // On-display Owner Name
  owner: Object, // Owner_id
  createdAt: { type: Date, defuault: Date.now },
  hashtags: [{ type: String }]
});
