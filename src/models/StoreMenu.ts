import { IsBoolean, IsMongoId, IsString } from "@nestjs/class-validator";
import { ObjectId } from "mongoose";

export class StoreMenu {
  id: ObjectId;
}
