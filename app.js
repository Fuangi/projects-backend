const express = require("express");
const path = require("path");
const eoyProjectRouter = require("./routes/endProjectRoutes");
const designProjectRouter = require("./routes/designProjectRoutes");

const app = express();

// pug
app.set("view engine", "pug");
// specifying the location to our html files
app.set("views", path.join(__dirname, "views"));
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static("css"));

// body parser - reading data from body into req.body
app.use(express.json());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Setting up the routes
app.use("/projects/eoy", eoyProjectRouter);
app.use("/projects/design", designProjectRouter);

// Pug routes
app.get("/", (req, res) => {
  res.status(200).render("base");
});

// Handline unhandled routes
app.all("*", (req, res, next) => {
  res.send("Can't find this route");
});

module.exports = app;
