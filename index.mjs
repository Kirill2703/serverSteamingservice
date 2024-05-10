import express from "express";
import dbconnect from "./db/index.mjs";
import countryRouter from "./routes/countryRouter.mjs";
import movieRouter from "./routes/movieRouter.mjs";
import genreRouter from "./routes/genreRouter.mjs";
import actorRouter from "./routes/actorRouter.mjs";
import typeRouter from "./routes/typeRouter.mjs";
import filmmakerRouter from "./routes/filmmakerRouter.mjs";
import cors from "cors";
import multer from "multer";
import authRouter from "./routes/authRouter.mjs";
import subscribeRouter from "./routes/subscribeRouter.mjs"

var storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

const app = express();

dbconnect.on("error", () => {
  console.log("Connect Error DB");
});
dbconnect.on("connected", () => {
  console.log("Connected DB");
});

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Stream Servis waiting you!");
});

app.use("/countries", countryRouter);
app.use("/movies", movieRouter);
app.use("/genres", genreRouter);
app.use("/actors", actorRouter);
app.use("/types", typeRouter);
app.use("/filmmakers", filmmakerRouter);
app.use("", authRouter);
app.use('/subscribe', subscribeRouter)

app.post("/upload-img", upload.single("img"), function (req, res, next) {
  const file = req.file;
  console.log(file);

  if (!file) {
    res.send("Error");
  } else {
    res.send("OK");
  }
});

app.post(
  "/upload-photo-actor",
  upload.single("photoActor"),
  function (req, res, next) {
    const file = req.file;
    console.log(file);

    if (!file) {
      res.send("Error");
    } else {
      res.send("OK");
    }
  }
);

app.post(
  "/upload-filmmaker-photo",
  upload.single("filmmakerPhoto"),
  function (req, res, next) {
    const file = req.file;
    console.log(file);

    if (!file) {
      res.send("Error");
    } else {
      res.send("OK");
    }
  }
);

app.post(
  "/upload-img-gallery",
  upload.single("gallery"),
  function (req, res, next) {
    const file = req.file;
    console.log(file);

    if (!file) {
      res.send("Error");
    } else {
      res.send("OK");
    }
  }
);

app.listen(4000);
