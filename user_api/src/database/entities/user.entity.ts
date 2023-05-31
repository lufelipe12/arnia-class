import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
  password: string;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, unique: true },
    email: { type: String, required: true, minlength: 5 },
    age: { type: Number, required: true, min: 18 },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, required: true, minlength: 5 },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
