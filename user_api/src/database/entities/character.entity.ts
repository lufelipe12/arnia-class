import mongoose, { Schema, Document, mongo } from "mongoose";

export interface ICharacter extends Document {
  nickname: string;
  vocation: string;
  user: string;
}

const characterSchema: Schema = new Schema({
  nickname: { type: String, required: true, unique: true },
  vocation: { type: String, required: true, minlength: 3 },
  user: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Character = mongoose.model<ICharacter>("Character", characterSchema);

export default Character;
