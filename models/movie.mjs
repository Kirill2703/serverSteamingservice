import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: { type: String, required: true },
  img: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
  },
  year: { type: Date, required: true },
  countries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
  genres:[{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}]
});

const Movie = mongoose.model('Movie', schema)

export default Movie
