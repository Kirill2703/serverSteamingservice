import Type from "../models/type.mjs"


const all = async (req, res) => {
    const types = await Type.find({}).populate('Movie')
    res.json(types)
}

const create = async (req, res) => {
    try {
        const type = new Type(req.body)
        await type.save()
        res.json(type)
    }
    catch (error) {
        res.status(400).json(error)
    }
}

export default {all, create}