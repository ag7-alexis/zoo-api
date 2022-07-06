import express from "express";
import Animal from "../models/animal.js";

const router = express.Router();

router.get("/animal", async (req, res) => {
    const animals = await Animal.find();

    res.send(animals);
});

router.post("/animal", async (req, res) => {
    const animals = new Animal({
        name: req.body.name,
        race: req.body.race,
        age: req.body.age,
        sexe: req.body.sexe,
        events: req.body.events,
    });
    await animals.save();
    res.send(animals);
});

export default router;
