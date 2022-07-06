import { mongoose } from "mongoose";

const schema = mongoose.Schema({
    name: String,
    race: String,
    age: Number,
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

export default mongoose.model("Animal", schema);
