import express from "express";
import * as AuthController from "../controller/auth.controller.js";

const router = express.Router();

/**
 * @openapi
 * /:
 *   register:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post("/register", AuthController.register);

/**
 * @openapi
 * /:
 *   login:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/login", AuthController.login);

export default router;

