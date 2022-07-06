import express from "express";
import * as CustomerController from "../controller/customer.controller.js";

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
router.get("/customer", CustomerController.getAll);

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/customer/:id", CustomerController.getById);

/**
 * @openapi
 * /:
 *   delete:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.delete("/customer/:id", CustomerController.deleteById);

/**
 * @openapi
 * /:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/customer", CustomerController.create);

/**
 * @openapi
 * /:
 *   put:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.put("/customer/:id", CustomerController.replace);

/**
 * @openapi
 * /:
 *   patch:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.patch("/customer/:id", CustomerController.update);

export default router;
