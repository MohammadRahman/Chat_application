import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { config } from "../utils/config";

export interface UserInput {
  name: string;
  email: string;
  password: string;
}
export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(suppliedPassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.SALT);
  this.password = await bcrypt.hash(this.password, salt);
  return next();
});
userSchema.methods.comparePassword = async function (
  suppliedPassword: string
): Promise<boolean> {
  return await bcrypt
    .compare(suppliedPassword, this.password)
    .catch((e) => false);
};

export const USER_MODEL = mongoose.model<UserDocument>("users", userSchema);
