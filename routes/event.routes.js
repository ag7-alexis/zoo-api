import express from "express";
import * as EventController from "../controller/event.controller.js";

const router = express.Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/event", EventController.getAll);

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/event/:id", async (req, res) => {
    const { id } = req.params;
    const events = await Event.findById(id);
    res.send(events);
});

/**
 * @openapi
 * /:
 *   delete:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.delete("/event/:id", async (req, res) => {
    const { id } = req.params;
    await Event.deleteOne({ _id: id });
    res.send();
});

/**
 * @openapi
 * /:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/event", async (req, res) => {
    const { title, description, startDate, endDate, countExpectedPeople, location, animals } = req.body;
    const event = new Event({
        title,
        description,
        startDate,
        endDate,
        countExpectedPeople,
        location,
        animals,
    });
    await event.save();
    res.send(event);
});

export default router;
