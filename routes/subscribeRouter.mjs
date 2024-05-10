import express from "express";
import subcsribeController from "../controllers/subcsribeController.mjs";

const router = express.Router();


router.get("", subcsribeController.allSubscribesUsers);
router.get("/:id", subcsribeController.allSubcsribesUserById);
router.post("", subcsribeController.setSubcsribe);


export default router