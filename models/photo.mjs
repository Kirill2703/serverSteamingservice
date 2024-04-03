import mongoose from "mongoose";

const schema = mongoose.Schema({
  img: [
    {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
    },
  ],
});