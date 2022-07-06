import { mongoose } from "mongoose";

const schemaEvent = mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    countExpectedPeople: Number,
    location: String,
    animals: [{ type: ObjectId, ref: "Animal" }],
    customers: [{ type: ObjectId, ref: "Customer" }],
});

export default mongoose.model("Event", schemaEvent);
