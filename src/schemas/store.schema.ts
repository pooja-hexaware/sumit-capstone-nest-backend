import mongoose from "mongoose";
import { FacilitiesSchema } from "./facilities.schema";

export const StoreSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  zip: String,
  city: String,
  state: String,
  storePhone: String,
  kitchenPhone: String,
  storeFacilities: [FacilitiesSchema],
  isActive: String
});