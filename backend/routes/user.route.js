import express from "express";
import { getAllUsers, signin, signup } from "../controllers/user.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", signin);

router.use(requireAuth);

router.get("/all-users", getAllUsers);

export default router;
