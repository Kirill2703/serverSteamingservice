import mongoose from "mongoose";


const schema = mongoose.Schema({
    title: { type: String, required: true },
    movies: [{type: mongoose.Schema.Types.ObjectId, ref: "Movie"}]
})

const Type = mongoose.model('Type', schema)

export default Type