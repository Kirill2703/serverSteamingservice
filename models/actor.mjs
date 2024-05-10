import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    actorPhoto: {type: String, required: false},
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

const Actor = mongoose.model('Actor', schema)

export default Actor