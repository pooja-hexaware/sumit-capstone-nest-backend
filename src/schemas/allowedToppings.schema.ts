import mongoose from "mongoose";

export const AllowedToppingsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number
});