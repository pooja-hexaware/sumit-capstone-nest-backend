import mongoose from "mongoose";

export const CustomerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  postalCode: String,
  city: String
});