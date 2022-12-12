import mongoose from "mongoose";

export const FacilitiesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String
});