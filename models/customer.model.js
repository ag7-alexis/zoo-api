import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    address: String,
    phone: String,
    peoples: [{ Age: Number, Sexe: String }],
    creationDate: { type: Date, default: Date.now },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

export default mongoose.model("Customer", schema);
