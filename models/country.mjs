import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: { type: String, required: true },
    movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
})

const Country = mongoose.model('Country', schema) 

export default Country