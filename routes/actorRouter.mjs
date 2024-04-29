import express from "express";
import actorController from "../controllers/actorController.mjs";

const router = express.Router();

router.get("", actorController.all);
router.post("/", actorController.create);
router.put("/:id", actorController.update);
router.delete("/:id", actorController.remove);
router.get('/:id', actorController.getActor)

export default router;
