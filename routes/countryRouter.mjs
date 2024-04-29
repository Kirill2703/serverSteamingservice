import express from 'express'
import countryController from '../controllers/countryController.mjs'


const router = express.Router()

router.get('', countryController.all)
router.post("/", countryController.create);
router.get('/fill', countryController.fillCountries)
router.get('/clear', countryController.clearCountries)
router.get('/:id', countryController.getCountry)

export default router