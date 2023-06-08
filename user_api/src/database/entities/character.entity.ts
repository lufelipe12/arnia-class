import mongoose, { Schema, Document, mongo } from "mongoose";

export interface ICharacter extends Document {
  nickname: string;
  vocation: string;
  userId: string;
}

const characterSchema: Schema = new Schema({
  nickname: { type: String, required: true, unique: true },
  vocation: { type: String, required: true, minlength: 3 },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Character = mongoose.model<ICharacter>("Character", characterSchema);

export default Character;
