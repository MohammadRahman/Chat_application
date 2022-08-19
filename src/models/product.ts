import mongoose from "mongoose";
import { UserDocument, USER_MODEL } from "./user";

export interface ProductInput {
  name: string;
  price: number;
  image: string;
}
export interface ProductDocumaent extends ProductInput, mongoose.Document {
  createdBy: UserDocument["_id"];
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "USER_MODEL",
  },
});
export const PRODUCT_MODEL = mongoose.model<ProductDocumaent>(
  "products",
  productSchema
);
