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
router.get("/event/:id", EventController.getById);

/**
 * @openapi
 * /:
 *   delete:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.delete("/event/:id", EventController.deleteById);

/**
 * @openapi
 * /:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/event", EventController.create);

/**
 * @openapi
 * /:
 *   put:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.put("/event/:id", EventController.replace);

/**
 * @openapi
 * /:
 *   patch:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.patch("/event/:id", EventController.update);

export default router;
