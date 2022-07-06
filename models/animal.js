const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    color: String,
    race: String,
    age: Number
});

module.exports = mongoose.model("Animal", schema);