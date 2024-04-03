import express from "express";
import genreController from "../controllers/genreController.mjs";

const router = express.Router();

router.get("", genreController.all);
router.post("/", genreController.create);

export default router;
