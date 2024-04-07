import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
})

const Country = mongoose.model('Country', schema) 

export default Country