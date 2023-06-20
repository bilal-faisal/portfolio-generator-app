import express from "express";
import {
  login,
  register,
  storeProjects,
  getProjects,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/arrayItems/:id", storeProjects);

router.get("/arrayItems/:id", getProjects);

export default router;
