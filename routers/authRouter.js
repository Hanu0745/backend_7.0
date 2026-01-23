import {
  registerUser,
  userLogin,
  getProfile,
  userLogout
} from "../controllers/authController.js";
import { authrizationWithCookies } from "../authMiddleware/authmiddleware.js";


import express from "express";
const router = express.Router();

router.post("/add-newuser", registerUser);
router.post("/login-newuser", userLogin);
router.get("/get-profile", authrizationWithCookies, getProfile);
router.get("/logout-user", userLogout);

export default router;