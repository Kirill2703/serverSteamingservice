import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: { type: String, required: true },
  img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1712610611837-c277a56b8d58?q=80&w=1755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  year: { type: String, required: true },
  countries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }],
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  gallery: [{ type: String }],
  trailer: { type: String },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  ratingIMDB: { type: String, default: "IMDB Rating" },
  description:{type:String, required:false},
  agerating: { type: String, required: false },
  runtimes: { type: String, required: false },
  types: [{ type: mongoose.Schema.Types.ObjectId, ref: "Type" }],
  filmmakers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Filmmaker" }],
});

const Movie = mongoose.model('Movie', schema)

export default Movie
