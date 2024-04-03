import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://wondersweb75:6pgQA4eieAgtW7Yv@cluster0.mmzzdtm.mongodb.net/streamingservis?retryWrites=true&w=majority"
);

export default mongoose.connection
