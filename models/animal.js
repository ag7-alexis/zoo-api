const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    race: String,
    age: Number,
    events: [{ type : ObjectId, ref: 'Event' }]
});

module.exports = mongoose.model("Animal", schema);