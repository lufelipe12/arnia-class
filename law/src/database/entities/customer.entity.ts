import mongoose, { Document, Schema } from "mongoose";

interface ICustomer extends Document {
  name: string;
  email: string;
  cpf: string;
}

const CustomerSchema = new Schema<ICustomer>({
  name: { required: true, type: String },
  email: { required: true, type: String },
  cpf: { required: true, type: String },
});

const CustomerModel = mongoose.model<ICustomer>("Customer", CustomerSchema);

export default CustomerModel;
