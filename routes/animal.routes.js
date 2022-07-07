import express from "express";
import * as AnimalController from "../controller/animal.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Animal
 *   description: Animal management
 */

/**
 * @openapi
 * /api/animal:
 *   get:
 *     description: Retrieve a list of animals
 *     tags: [Animal]
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
 *         description: The number of animal per page you want
 *     responses:
 *       200:
 *         description: Returns a list of animals.
 *         headers:
 *            X-Total:
 *              type: integer
 *              description: Total of animals to paginate.
 */
router.get("/animal", AnimalController.getAll);

/**
 * @openapi
 * /api/animal:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     tags: [Animal]
 *     responses:
 *       201:
 *         description: Returns a mysterious string.
 */
router.post("/animal", AnimalController.create);

/**
 * @openapi
 * /api/animal/{id}:
 *   get:
 *     description: Retrieve an animal with his id.
 *     tags: [Animal]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the animal
 *     responses:
 *       200:
 *         description: Returns an animal.
 *       404:
 *         description: Animal with this id not found.
 */
router.get("/animal/:id", AnimalController.getById);

/**
 * @openapi
 * /api/animal/{id}:
 *   delete:
 *     description: Delete an animal with his id.
 *     tags: [Animal]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the animal
 *     responses:
 *       204:
 *         description: Returns an empty body.
 *       404:
 *         description: Animal with this id not found.
 */
router.delete("/animal/:id", AnimalController.deleteById);

/**
 * @openapi
 * /api/animal/{id}:
 *   put:
 *     description: Replace an animal with an id.
 *     tags: [Animal]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the animal
 *     responses:
 *       200:
 *         description: Returns the new animal for this id.
 *       404:
 *         description: Animal with this id not found.
 */
router.put("/animal/:id", AnimalController.replace);

/**
 * @openapi
 * /api/animal/{id}:
 *   patch:
 *     description: Edit an animal with an id.
 *     tags: [Animal]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the animal
 *     responses:
 *       200:
 *         description: Returns the new values for this animal.
 *       404:
 *         description: Animal with this id not found.
 */
router.patch("/animal/:id", AnimalController.update);

export default router;
