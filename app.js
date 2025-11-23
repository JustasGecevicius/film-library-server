var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const configurationRouter = require("./routes/film-library/configuration");
const movieRouter = require("./routes/film-library/movie");
const tvRouter = require("./routes/film-library/tv");
const personRouter = require("./routes/film-library/person");
const searchRouter = require("./routes/film-library/search");
const youtubeRouter = require("./routes/film-library/youtube");

var app = express();

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: "GET,OPTIONS",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("film_library/configuration", configurationRouter);
app.use("film_library/movie", movieRouter);
app.use("film_library/tv", tvRouter);
app.use("film_library/person", personRouter);
app.use("film_library/search", searchRouter);
app.use("film_library/youtube", youtubeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
