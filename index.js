const express = require('express');
const port = 3000;
const app = express();
const router = require('./routes');

const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://mongo_admin:test123@cluster0.4hmoj.mongodb.net/zoo';

mongoose.connect(mongodb);

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error'));

app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});