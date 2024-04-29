import express from "express";
import typeController from "../controllers/typeController.mjs";

const router = express.Router();

router.get("", typeController.all);
router.post("/", typeController.create);
router.put("/:id", typeController.update);
router.delete("/:id", typeController.remove);
router.get('/:id', typeController.getType)

export default router;
