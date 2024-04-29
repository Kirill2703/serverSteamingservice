import express from "express";
import genreController from "../controllers/genreController.mjs";

const router = express.Router();

router.get("", genreController.all);
router.post("/", genreController.create);
router.put('/:id', genreController.update)
router.delete('/:id', genreController.remove)
router.get("/:id", genreController.getGenre);

export default router;
