import Genre from "../models/genre.mjs";

const all = async (req, res) => {
  const genres = await Genre.find({}).populate("movies");
  res.json(genres);
};

const create = async (req, res) => {
  try {
    const genre = new Genre(req.body);
    await genre.save();
    res.json(genre);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  try {
    await Genre.findByIdAndUpdate(id, req.body)
    res.json({
      message: 'Genre update'
      
    })
  }

  catch (error) {
    res.status(400).json(error)
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await Genre.findByIdAndDelete(id);
    res.json({
      message: "Genre deleted",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getGenre = async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  res.send(genre);
};

export default { all, create, update, remove, getGenre };
