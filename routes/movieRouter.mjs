import express from 'express'
import movieController from '../controllers/movieController.mjs';

const router = express.Router()

router.get("", movieController.all);
router.post("/", movieController.create);

export default router