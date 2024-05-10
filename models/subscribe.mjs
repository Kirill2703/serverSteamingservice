import mongoose from "mongoose";


const schema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: Date, default: new Date() },
    summa: {type: Number, default: 0}
})

const Subscribe = mongoose.model("Subscribe", schema)

export default Subscribe