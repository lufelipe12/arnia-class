import mongoose, { Document, Schema } from "mongoose";

interface ICity extends Document {
  city: string;
}

const CitySchema = new Schema<ICity>({
  city: { type: String, required: true },
});

// Criando o modelo City com o Schema definido
const CityModel = mongoose.model<ICity>("City", CitySchema);

export default CityModel;
