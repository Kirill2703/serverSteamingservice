import Country from "../models/country.mjs";
import Genre from "../models/genre.mjs";
import Actor from '../models/actor.mjs'
import Movie from "../models/movie.mjs";


const all = async (req, res) => {
  try {const allModels = await Movie.find({}).populate("countries").populate('genres').populate('actors');
    res.json(allModels);
  }
  catch (error){
    res.status(400).json(error)
  }
};

const create = async (req, res) => {
  //добавляем фильм в БД
  try {
    const movie = new Movie(req.body);
    await movie.save();

    //странам добавить фильм который мы добавляем сейчас
    const countries = req.body.countries; // массив айди стран
    countries.map(async (countryId) => {
        const country = await Country.findById(countryId);
        country.movies.push(movie._id);
        await country.save()
    });

    const genres = req.body.genres;
    genres.map(async (genreId) => {
      const genre = await Genre.findById(genreId)
      genre.movies.push(movie._id)
      await genre.save()
    })

    const actors = req.body.actors
    actors.map(async (actorId) => {
      const actor = await Actor.findById(actorId)
      actor.movies.push(movie._id)
      await actor.save()
    })

    res.json(movie);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default { all, create };
