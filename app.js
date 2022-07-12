const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// app.use("/api/url/", )

const server = app.listen(process.env.PORT || 8800, async() => {
  try{
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongo");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listening on port ${server.address().port}`);
});