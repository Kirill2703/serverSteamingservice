import express from "express";
import actorController from "../controllers/actorController.mjs";

const router = express.Router();

router.get("", actorController.all);
router.post("/", actorController.create);

export default router;
