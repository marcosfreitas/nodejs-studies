import { Document, Schema, Model, model } from "mongoose";
import { UserInterface } from "@interfaces/UserInterface";

export interface UserModel extends UserInterface, Document {
  fullName(): string;
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

UserSchema.methods.fullName = function (): string {
  return this.firstName.trim() + " " + this.lastName.trim();
};

export const UserModel: Model<UserModel> = model<UserModel>("User", UserSchema);
