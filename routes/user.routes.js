import express from "express";
import * as AuthController from "../controller/auth.controller.js";
import { authentificateJWT } from "../authentificate.js";

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
 *     description: Register an user.
 *     tags: [User]
 *     responses:
 *       201:
 *         description: Returns the registered user.
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
 *            access_token:
 *              type: string
 *              description: Use the token.
 *       400:
 *          description: Invalid credentials.
 */
router.post("/login", AuthController.login);

/**
 * @openapi
 * /api/auth-check:
 *   get:
 *     description: Verify if you are connected.
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Is Auth.
 *       401:
 *         description: Not auth.
 */
router.get("/auth-check", authentificateJWT, AuthController.verifyAuth);

export default router;
