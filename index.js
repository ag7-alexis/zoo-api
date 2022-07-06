import express from "express";
import routesEvent from "./routes/event.routes.js";
import routesCustomer from "./routes/customer.routes.js";
import routesAnimal from "./routes/animal.routes.js";
import mongoose from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as dotenv from "dotenv";

dotenv.config();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Zoo API",
            version: "1.0.0",
        },
    },
    apis: ["./routes/*.js"],
};

const app = express();

const mongodb = process.env.MONGODB_URI;

mongoose.connect(mongodb);

const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error"));

app.use(express.json());

const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api", routesEvent);
app.use("/api", routesCustomer);
app.use("/api", routesAnimal);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
