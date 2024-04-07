import express from "express";
import typeController from "../controllers/typeController.mjs";

const router = express.Router();

router.get("", typeController.all);
router.post("/",typeController.create);

export default router;
