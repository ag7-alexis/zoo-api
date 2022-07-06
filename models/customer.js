import { mongoose } from "mongoose";

const schema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    address: String,
    phone: String,
    peoples: { Age: Number, Sexe: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Customer", schema);
