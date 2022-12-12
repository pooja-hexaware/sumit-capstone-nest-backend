import mongoose from "mongoose";
import { AllowedToppingsSchema } from "./allowedToppings.schema";

export const MenuSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  amount: Number,
  quantity: Number,
  allowedToppings: [AllowedToppingsSchema]
});