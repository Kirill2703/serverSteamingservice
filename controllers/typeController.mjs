import Type from "../models/type.mjs"


const all = async (req, res) => {
    const types = await Type.find({}).populate('movies')
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

const update = async (req, res) => {
  const id = req.params.id;

  try {
    await Type.findByIdAndUpdate(id, req.body);
    res.json({
      massage: "Type update",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await Type.findByIdAndDelete(id);
    res.json({
      massage: "Type deleted",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getType = async (req, res) => {
  const type = await Type.findById(req.params.id);
  res.send(type);
};

export default {all, create, update, remove, getType}