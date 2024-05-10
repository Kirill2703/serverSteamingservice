import mongoose from "mongoose"


const schema = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    photo: {type: String, required: false},
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
})


const Filmmaker = mongoose.model('Filmmaker', schema)

export default Filmmaker