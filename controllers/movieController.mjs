import Country from "../models/country.mjs";
import Genre from "../models/genre.mjs";
import Movie from "../models/movie.mjs";


const all = async (req, res) => {
  try {const moviesAndGenres = await Movie.find({}).populate("countries").populate('genres');
    res.json(moviesAndGenres);
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

    res.json(movie);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default { all, create };
