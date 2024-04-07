import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: { type: String, required: true },
  img: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
  },
  year: { type: String, required: true },
  countries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
  actors:[{type: mongoose.Schema.Types.ObjectId, ref: 'Actor'}],
  gallery: [{ type: String }],
  trailer: { type: String },
  likes: { type: Number, default: 0},
  dislikes: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  agerating: { type: String, required: false },
  runtimes: { type: String, required: false },
  types: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }],
  filmmakers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Filmmaker'}]
  
});

const Movie = mongoose.model('Movie', schema)

export default Movie
