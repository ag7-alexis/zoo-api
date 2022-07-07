import express from "express";
import * as EventController from "../controller/event.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event management
 */

/**
 * @openapi
 * /api/event:
 *   get:
 *     description: Retrieve list of events.
 *     tags: [Event]
 *     parameters:
 *       - in: query
 *         name: page
 *         type: integer
 *         default: 0
 *         description: The page you want
 *       - in: query
 *         name: limit
 *         type: integer
 *         default: 10
 *         description: The number of event per page you want
 *     responses:
 *       200:
 *         description: Returns list of events.
 *         headers:
 *            X-Total:
 *              type: integer
 *              description: Total of events to paginate.
 */
router.get("/event", EventController.getAll);

/**
 * @openapi
 * /api/event/:
 *   post:
 *     description: Create a new event.
 *     tags: [Event]
 *     responses:
 *       201:
 *         description: Returns the created event.
 */
router.post("/event", EventController.create);

/**
 * @openapi
 * /api/event/{id}:
 *   get:
 *     description: Retrieve an event
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *     responses:
 *       200:
 *         description: Returns an event.
 *       404:
 *         description: Event with this id not found.
 */
router.get("/event/:id", EventController.getById);

/**
 * @openapi
 * /api/event/{id}:
 *   delete:
 *     description: Delete an event with an id.
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *     responses:
 *       204:
 *         description: Returns an empty body.
 *       404:
 *         description: Event with this id not found.
 */
router.delete("/event/:id", EventController.deleteById);

/**
 * @openapi
 * /api/event/{id}:
 *   put:
 *     description: Replace an event with an id.
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *     responses:
 *       200:
 *         description: Returns an event with his data replaced.
 *       404:
 *         description: Event with this id not found.
 */
router.put("/event/:id", EventController.replace);

/**
 * @openapi
 * /api/event/{id}:
 *   patch:
 *     description: Edit an event with an id.
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *     responses:
 *       200:
 *         description: Returns an event with his data edited.
 *       404:
 *         description: Event with this id not found.
 */
router.patch("/event/:id", EventController.update);

/**
 * @openapi
 * /api/event/{id}/customers:
 *   patch:
 *     description: Retrieve customers of an event
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *     responses:
 *       200:
 *         description: Returns a list of customers.
 *       404:
 *         description: Event with this id not found.
 */
router.get("/event/:id/customers", EventController.getCustomerByEventId);

/**
 * @openapi
 * /api/event/{id}/near-events:
 *   patch:
 *     description: Retrieve events near to an event found with his id.
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *       - in: query
 *         name: page
 *         type: integer
 *         default: 0
 *         description: The page you want
 *       - in: query
 *         name: limit
 *         type: integer
 *         default: 10
 *         description: The number of event per page you want
 *       - in: query
 *         name: distance
 *         type: integer
 *         default: 10000
 *         description: The distance in meter from the event
 *     responses:
 *       200:
 *         description: Returns a list of events.
 *       404:
 *         description: Event with this id not found.
 */
router.get("/event/:id/near-events", EventController.getEventNearToAnEventByEventId);

export default router;
