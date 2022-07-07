import express from "express";
import * as AuthController from "../controller/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @openapi
 * /api/register:
 *   post:
 *     description: Register a user.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Register a user.
 */
router.post("/register", AuthController.register);

/**
 * @openapi
 * /api/login:
 *   post:
 *     description: Connexion with a user account.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Generate a token of connexion.
 *         headers:
 *            Authorization:
 *              type: string
 *              description: Use the token.
 */
router.post("/login", AuthController.login);

export default router;

