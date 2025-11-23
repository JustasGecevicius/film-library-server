const express = require("express");
const router = express.Router();

router.get("/movie", (req, res) => {
  const searchString = req.query.query;
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1&query=${searchString}&language=en-US&include_adult=false`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/tv", (req, res) => {
  const searchString = req.query.query;
  fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1&query=${searchString}&language=en-US&include_adult=false`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/person", (req, res) => {
  const searchString = req.query.query;
  fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1&query=${searchString}&language=en-US&include_adult=false`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

module.exports = router;
