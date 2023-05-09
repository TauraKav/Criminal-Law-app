const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const caseRouter = require("./routes/case");
const criminalCodeArticleRouter = require("./routes/criminalCodeArticle");
const user = require("./routes/user");

const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(caseRouter );
app.use(criminalCodeArticleRouter);
app.use(user);

mongoose
  .connect(
    "mongodb+srv://Taura:taura1@cluster0.b9fybtx.mongodb.net/test"
  )
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});