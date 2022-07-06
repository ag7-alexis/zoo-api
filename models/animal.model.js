import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    race: String,
    age: Number,
    sexe: String,
    creationDate: { type: Date, default: Date.now },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

export default mongoose.model("Animal", schema);
