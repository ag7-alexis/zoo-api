const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    address: String,
    phone: String,
    peoples: {Age: Number, Sexe: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Customer", schema);