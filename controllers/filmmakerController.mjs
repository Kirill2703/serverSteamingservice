import Filmmaker from "../models/filmmaker.mjs"


const all = async (req, res) => {
    const filmmakers = await Filmmaker.find({}).populate('Movie')
    json.save(filmmakers)
}

const create = async (req, res) => {
    try {
        const filmmaker = new Filmmaker(req.body)
        await filmmaker.save()
        res.json(filmmaker)

    }

    catch (error) {
        res.status(400).json(error)
    }
}

export default {all, create}