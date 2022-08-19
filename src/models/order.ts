import { ProductDocumaent } from "./product";
import { UserDocument } from "./user";
import mongoose from "mongoose";

export interface OrderInput {
  status: boolean;
  userId: UserDocument["_id"];
  productId: ProductDocumaent["_id"];
}
export interface OrderDocument {
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "USER_MODEL",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PRODUCT_MODEL",
    },
    status: {
      type: Boolean,
      default: false,
    },
    expiresAt: {
      type: mongoose.Schema.Types.Date,
    },
  },
  { timestamps: true }
);

export const ORDER_MODEL = mongoose.model<OrderDocument>("Orders", orderSchema);
