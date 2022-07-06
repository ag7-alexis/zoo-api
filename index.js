import express from "express";
import routesEvent from "./routes/routesEvent.js";
import routesCustomer from "./routes/routesCustomer.js";
import routesAnimal from "./routes/routesAnimal.js";

const port = 3000;
const app = express();

import { mongoose } from "mongoose";

const mongodb = "mongodb+srv://mongo_admin:test123@cluster0.4hmoj.mongodb.net/test";

mongoose.connect(mongodb);

const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error"));

app.use(express.json());

app.use("/api", router);
app.use("/api", routesEvent);
app.use("/api", routesCustomer);
app.use("/api", routesAnimal);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
