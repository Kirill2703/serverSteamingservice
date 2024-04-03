import Country from "../models/country.mjs"

const all = async (req, res) => {
    const countries = await Country.find({}).populate('movies')
    res.json(countries)
}

const create = async (req, res) => {
    try {
        const country = new Country(req.body)
        await country.save()
        res.json(country)
    }

    catch (error) {
        res.status(400).json(error)
    }
}

export default {all, create}