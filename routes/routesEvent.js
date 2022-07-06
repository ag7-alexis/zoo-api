import express from "express";
import Event from "../models/event.js";

const router = express.Router();

router.get("/event", async (_, res) => {
    const events = await Event.find({});
    res.send(events);
});

router.post("/event", async (req, res) => {
    const event = new Event({ name: req.body.name, race: req.body.race, color: req.body.color });
    await event.save();
    res.send(event);
});

export default router;
