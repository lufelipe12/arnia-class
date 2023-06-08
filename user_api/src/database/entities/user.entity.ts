import mongoose, { Schema, Document } from "mongoose";
import { ICharacter } from "./character.entity";

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
  password: string;
  characters: ICharacter[];
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 5, unique: true },
    age: { type: Number, required: true, min: 18 },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, required: true, minlength: 5, select: false },
    characters: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
