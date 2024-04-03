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

export default { all, create };
