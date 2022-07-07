import express from "express";
import * as CustomerController from "../controller/customer.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @openapi
 * /api/customer:
 *   get:
 *     description: Retrieve a list of customers.
 *     tags: [Customer]
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
 *         description: The number of customer per page you want
 *     responses:
 *       200:
 *         description: Returns a a list of customers.
 *         headers:
 *            X-Total:
 *              type: integer
 *              description: Total of customers to paginate.
 */
router.get("/customer", CustomerController.getAll);

/**
 * @openapi
 * /api/customer:
 *   post:
 *     description: Create a customer
 *     tags: [Customer]
 *     consumes:
 *      - application/json
 *     requestBody:
 *       schema:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *           email:
 *             type: string
 *           address:
 *             type: string
 *           phone:
 *             type: string
 *           peoples:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 age:
 *                   type: integer
 *                 sexe:
 *                   type: string
 *           events:
 *             type: array
 *             items:
 *               type: string
 *     responses:
 *       201:
 *         description: Return the customer created
 */
router.post("/customer", CustomerController.create);

/**
 * @openapi
 * /api/customer/{id}:
 *   get:
 *     description: Get the customer by id
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the customer
 *     responses:
 *       200:
 *         description: Return the customer find
 *       404:
 *         description: Customer with this id not found.
 */
router.get("/customer/:id", CustomerController.getById);

/**
 * @openapi
 * /api/customer/:id/events:
 *   get:
 *     description: Get events of a customer
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the customer
 *     responses:
 *       200:
 *         description: Return the events of the customer
 *       404:
 *         description: Customer with this id not found.
 */
router.get("/customer/:id/events", CustomerController.getCustomerEventsId);

/**
 * @openapi
 * /api/customer/metrics/sexe:
 *   get:
 *     description: Count people by sexe
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the customer
 *     responses:
 *       200:
 *         description: Return numerics for the two sexes 
 *       404:
 *         description: Return nothing
 */
router.get("/customer/metrics/sexe", CustomerController.getCountPeopleBySexe);

/**
 * @openapi
 * /api/customer/{id}:
 *   delete:
 *     description: Delete a customer
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the customer
 *     responses:
 *       204:
 *         description: Returns an empty body.
 *       404:
 *         description: Customer with this id not found.
 */
router.delete("/customer/:id", CustomerController.deleteById);

/**
 * @openapi
 * /api/customer/{id}:
 *   put:
 *     description: Replace a customer with an id.
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the customer
 *     responses:
 *       200:
 *         description: Returns the new customer for this id.
 *       404:
 *         description: Customer with this id not found.
 */
router.put("/customer/:id", CustomerController.replace);

/**
 * @openapi
 * /api/customer/{id}:
 *   patch:
 *     description: Edit a customer with an id.
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         description: The id of the customer
 *     responses:
 *       200:
 *         description: Returns the new values for this customer.
 *       404:
 *         description: Customer with this id not found.
 */
router.patch("/customer/:id", CustomerController.update);

export default router;
