import Filmmaker from "../models/filmmaker.mjs"


const all = async (req, res) => {
    const filmmakers = await Filmmaker.find({}).populate('movies')
    res.json(filmmakers)
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

const update = async (req, res) => {
  const id = req.params.id;

  try {
    await Filmmaker.findByIdAndUpdate(id, req.body);
    res.json({
      massage: "Filmmaker update",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await Filmmaker.findByIdAndDelete(id);
    res.json({
      massage: "Filmmaker deleted",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getFilmmaker = async (req, res) => {
  const filmmaker = await Filmmaker.findById(req.params.id);
  res.send(filmmaker);
};

export default {all, create, update, remove, getFilmmaker}