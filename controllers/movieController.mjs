import Country from "../models/country.mjs";
import Genre from "../models/genre.mjs";
import Actor from "../models/actor.mjs";
import Movie from "../models/movie.mjs";
import Type from "../models/type.mjs";
import Filmmaker from "../models/filmmaker.mjs";

const all = async (req, res) => {
  try {
    const allModels = await Movie.find({})
      .populate("countries")
      .populate("genres")
      .populate("actors")
      .populate("types")
      .populate("filmmakers");
    res.json(allModels);
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res) => {
  //добавляем фильм в БД
  try {
    const movie = new Movie(req.body);
    await movie.save();

    //странам добавить фильм который мы добавляем сейчас
    // const countries = req.body.countries; // массив айди стран
    // countries.map(async (countryId) => {
    //   const country = await Country.findById(countryId);
    //   country.movies.push(movie._id);
    //   await country.save();
    // });

    // const genres = req.body.genres;
    // genres.map(async (genreId) => {
    //   const genre = await Genre.findById(genreId);
    //   genre.movies.push(movie._id);
    //   await genre.save();
    // });

    // const actors = req.body.actors;
    // actors.map(async (actorId) => {
    //   const actor = await Actor.findById(actorId);
    //   actor.movies.push(movie._id);
    //   await actor.save();
    // });

    // const types = req.body.types;
    // types.map(async (typeId) => {
    //   const type = await Type.findById(typeId);
    //   type.movies.push(type._id);
    //   await type.save();
    // });

    // const fillmakers = req.body.fillmakers;
    // fillmakers.map(async (filmmakerId) => {
    //   const filmmaker = await Filmmaker.findById(filmmakerId);
    //   filmmaker.movies.push(filmmaker._id);
    //   await filmmaker.save();
    // });

    const allValues = await Movie.findById(movie._id)
      .populate("countries")
      .populate("genres")
      .populate("actors")
      .populate("types")
      .populate("filmmakers");
    res.json(allValues);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  try {
    await Movie.findByIdAndUpdate(id, req.body);
    const movie = await Movie.findById(id)
      .populate("countries")
      .populate("genres")
      .populate("actors")
      .populate("types")
      .populate("filmmakers");
    res.send({ movie });
  } catch (error) {
    res.status(400).json(error);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await Movie.findByIdAndDelete(id);
    res.json({
      massage: "Movie deleted",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const setLikes = async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  movie.likes = movie.likes + 1
  await movie.save()
  res.send('OK')
}

const setDislikes = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  movie.dislikes = movie.dislikes + 1;
  await movie.save();
  res.send("OK");
};
export default { all, create, update, remove, setLikes, setDislikes };
