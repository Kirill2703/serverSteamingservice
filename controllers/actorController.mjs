import Actor from "../models/actor.mjs";

const all = async (req, res) => {
  const actors = await Actor.find({}).populate("movies");
  res.json(actors);
};

const create = async (req, res) => {
  try {
    const actor = new Actor(req.body);
    await actor.save();
    res.json(actor);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  try {
    await Actor.findByIdAndUpdate(id, req.body);
    res.json({
      massage: "Actor update",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await Actor.findByIdAndDelete(id);
    res.json({
      massage: "Actor deleted",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

export default { all, create, update, remove };
