import mongoose from "mongoose";
import { CustomerSchema } from "./customer.schema";
import { MenuSchema } from "./menu.schema";

export const OrderSchema = new mongoose.Schema({
  id: Number,
  orderDate: Date,
  customer: CustomerSchema,
  orderedItmes: [MenuSchema]
});