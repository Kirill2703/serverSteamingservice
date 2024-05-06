import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: { type: String, required: true },
  img: {
    type: String,
  },
  year: { type: String, required: true },
  countries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  actorPhoto: [{ type: mongoose.Schema.Types.ObjectId, ref: "PhotoActor" }],
  filmmakerPhoto: [{ type: mongoose.Schema.Types.ObjectId, ref: "PhotoFilmmaker" }],
  gallery: [{ type: String }],
  trailer: { type: String },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  ratingIMDB: { type: String, default: "IMDB Rating" },
  description: { type: String, required: false },
  agerating: { type: String, required: false },
  runtimes: { type: String, required: false },
  types: [{ type: mongoose.Schema.Types.ObjectId, ref: "Type" }],
  filmmakers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Filmmaker" }],
});

const Movie = mongoose.model('Movie', schema)

export default Movie
