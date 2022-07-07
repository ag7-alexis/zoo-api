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
 *     description: Welcome to swagger-jsdoc!
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
 *     description: Welcome to swagger-jsdoc!
 *     tags: [Event]
 *     responses:
 *       201:
 *         description: Returns a mysterious string.
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
 *     description: Welcome to swagger-jsdoc!
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
 *     description: Welcome to swagger-jsdoc!
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *       404:
 *         description: Event with this id not found.
 */
router.put("/event/:id", EventController.replace);

/**
 * @openapi
 * /api/event/{id}:
 *   patch:
 *     description: Welcome to swagger-jsdoc!
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the event
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *       404:
 *         description: Event with this id not found.
 */
router.patch("/event/:id", EventController.update);

/**
 * @openapi
 * /api/event/{id}/customers:
 *   patch:
 *     description: WRetrieve customers of an event
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
 *     description: WRetrieve customers of an event
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
router.get("/event/:id/near-events", EventController.getEventNearToAnEventByEventId);

export default router;
