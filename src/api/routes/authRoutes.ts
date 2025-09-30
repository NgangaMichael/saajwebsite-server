import { Router } from "express";
import { login } from "../controllers/authController.js";
import { body } from "express-validator";
import validate from "../validators/validate.js";

const router = Router();

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  validate,
  login
);

export default router;
