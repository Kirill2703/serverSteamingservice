import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

const Actor = mongoose.model('Actor', schema)

export default Actor