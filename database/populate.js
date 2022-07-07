import mongoose from "mongoose";
import * as dotenv from "dotenv";
import Animal from "../models/animal.model.js";
import Customer from "../models/customer.model.js";
import Event from "../models/event.model.js";
import User from "../models/user.model.js";

import animalsJson from "./animals.json";
import customersJson from "./customers.json";
import eventsJson from "./events.json";
import usersJson from "./users.json";

(async () => {
    console.log("START LOAD DATA");
    dotenv.config();

    const mongodb = process.env.MONGODB_URI;

    mongoose.connect(mongodb);

    const database = mongoose.connection;

    database.on("error", console.error.bind(console, "connection error"));
    console.log("LOAD ANIMALS 1/4");
    await Promise.all(
        animalsJson.map((a) => {
            a._id = mongoose.Types.ObjectId(a._id.$oid).toHexString();
            a.events = a.events.map((x) => mongoose.Types.ObjectId(x.$oid).toHexString());
            const animal = new Animal(a);
            return animal.save();
        })
    );
    console.log("LOAD CUSTOMERS 2/4");
    await Promise.all(
        customersJson.map((c) => {
            c._id = mongoose.Types.ObjectId(c._id.$oid).toHexString();
            c.events = c.events.map((x) => mongoose.Types.ObjectId(x.$oid).toHexString());
            c.peoples = c.peoples.map((x) => ({ Sexe: x.Sexe, Age: x.Age }));
            const customer = new Customer(c);
            return customer.save();
        })
    );
    console.log("LOAD EVENTS 3/4");
    await Promise.all(
        eventsJson.map((e) => {
            e._id = mongoose.Types.ObjectId(e._id.$oid).toHexString();
            e.animals = e.animals.map((x) => mongoose.Types.ObjectId(x.$oid).toHexString());
            e.customers = e.customers.map((x) => mongoose.Types.ObjectId(x.$oid).toHexString());
            e.startDate = Date(e.startDate.$date.$numberLong);
            e.endDate = Date(e.endDate.$date.$numberLong);
            const event = new Event(e);
            return event.save();
        })
    );
    console.log("LOAD USERS 4/4");
    await Promise.all(
        usersJson.map((u) => {
            u._id = mongoose.Types.ObjectId(u._id.$oid).toHexString();
            const user = new User(u);
            return user.save();
        })
    );

    console.log("DATA LOADED");
    process.exit();
})();
