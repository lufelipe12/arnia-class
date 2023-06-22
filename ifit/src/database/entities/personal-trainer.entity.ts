import mongoose, { Schema } from "mongoose";
import { IPersonalTrainer } from "../../interfaces/ipersonal-trainer.interface";

const personalTrainerSchema: Schema = new Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 8, unique: true },
    phoneNumber: { type: String, required: true, minlength: 8 },
    cref: { type: String, required: true, minlength: 8 },
    sport: {
      type: String,
      required: true,
      enum: ["soccer", "volleyball", "handball", "basketball"],
    },
    password: { type: String, required: true, minlength: 5, select: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const PersonalTrainer = mongoose.model<IPersonalTrainer>(
  "PersonalTrainer",
  personalTrainerSchema
);

export default PersonalTrainer;
