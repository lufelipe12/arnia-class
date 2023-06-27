import mongoose, { Schema } from "mongoose";
import { IAthlete } from "../../interfaces/iathlete.interface";

const athleteSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    sport: {
      type: String,
      required: true,
      enum: ["soccer", "volleyball", "handball", "basketball"],
    },
    isActive: { type: Boolean, default: true },
    personalTrainerId: { type: Schema.Types.ObjectId, ref: "PersonalTrainer" },
  },
  {
    timestamps: true,
  }
);

const Athlete = mongoose.model<IAthlete>("Athlete", athleteSchema);

export default Athlete;
