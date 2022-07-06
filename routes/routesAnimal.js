import express from "express";

const router = express.Router();

router.get("/animals", async (req, res) => {
    const animals = await Animal.find();

    res.send(animals);
});

router.post("/animals_create", async (req, res) => {
    const animals = new Animal({
        name: req.body.name,
        race: req.body.race,
        age: req.body.age,
        events: req.body.events,
    });
    await animals.save();
    res.send(animals);
});

export default router;
