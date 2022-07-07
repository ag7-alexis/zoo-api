import mongoose from "mongoose";

const schemaEvent = mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    creationDate: { type: Date, default: Date.now },
    countExpectedPeople: Number,
    location: {
        type: {
            type: String,
            default: "Point",
        },
        coordinates: {
            type: [],
        },
    },
    animals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Animal" }],
    customers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
});

schemaEvent.index({ location: "2dsphere" });
export default mongoose.model("Event", schemaEvent);
