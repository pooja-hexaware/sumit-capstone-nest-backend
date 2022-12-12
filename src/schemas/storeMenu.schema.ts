import mongoose from "mongoose";
import { MenuSchema } from "./menu.schema";

export const StoreMenuSchema = new mongoose.Schema({
  storeId: Number,
  menuIds: [MenuSchema]
});