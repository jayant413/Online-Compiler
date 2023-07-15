import express from "express";
import { signUpController, logInController } from "../../controllers/authController.js";

const router = express.Router();

// Register Router
router.post("/register", signUpController)

// LogIn Router
router.post("/login", logInController)


export default router;