import { Document, Schema, Model, model } from "mongoose";
import { UserInterface } from "@interfaces/UserInterface";

export interface UserDoc extends UserInterface, Document {
  // fullName(): string;
}

const UserSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

/* @bug UserSchema.methods.fullName = function (): string {
  console.log("ok", this.firstName);
  return this.firstName.trim() + " " + this.lastName.trim();
}; */

export const UserModel: Model<UserDoc> = model<UserDoc>("User", UserSchema);
