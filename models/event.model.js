import mongoose from "mongoose";

const schemaEvent = mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    countExpectedPeople: Number,
    location: {
        type: {
            type: String,
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    animals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Animal" }],
    customers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
});

export default mongoose.model("Event", schemaEvent);
