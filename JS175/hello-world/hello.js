const express = require("express");
const app = express();
const morgan = require('morgan')



app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"))
app.use(morgan("common"))

app.get("/", (req, res) => {
  res.render("hello-world-english");
});

// Add this code beneath the code for `app.get("/", ...)`.

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    currentLinkIsEnglish: "current",
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    currentLinkIsFrench: "current",
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    currentLinkIsSerbian: "current",
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});