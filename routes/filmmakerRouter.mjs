import express from "express";
import filmmakerController from "../controllers/filmmakerController.mjs"

const router = express.Router();

router.get("", filmmakerController.all);
router.post("/", filmmakerController.create);
router.put("/:id", filmmakerController.update);
router.delete("/:id", filmmakerController.remove);

export default router;
