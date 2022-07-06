import express from "express";
import * as AnimalController from "../controller/animal.controller.js";

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
router.get("/animal", AnimalController.getAll);

/**
 * @openapi
 * /:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/animal", AnimalController.create);

 /**
  * @openapi
  * /:
  *   get:
  *     description: Welcome to swagger-jsdoc!
  *     responses:
  *       200:
  *         description: Returns a mysterious string.
  */
 router.get("/animal/:id", AnimalController.getById);
 
 /**
  * @openapi
  * /:
  *   delete:
  *     description: Welcome to swagger-jsdoc!
  *     responses:
  *       200:
  *         description: Returns a mysterious string.
  */
router.delete("/animal/:id", AnimalController.deleteById);
 
 /**
  * @openapi
  * /:
  *   post:
  *     description: Welcome to swagger-jsdoc!
  *     responses:
  *       200:
  *         description: Returns a mysterious string.
  */
router.post("/animal", AnimalController.create);

export default router;
