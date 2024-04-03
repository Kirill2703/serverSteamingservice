import express from 'express'
import countryController from '../controllers/countryController.mjs'


const router = express.Router()

router.get('', countryController.all)
router.post("/", countryController.create);

export default router