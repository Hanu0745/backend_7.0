import {
  registerUser,
  userLogin,
  getProfile,
} from "../controllers/authController.js";
import { authrization } from "../authMiddleware/authmiddleware.js";


import express from "express";
const router = express.Router();

router.post("/add-newuser", registerUser);
router.post("/login-newuser", userLogin);
router.get("/get-profile", authrization, getProfile);

export default router;