const express = require("express");
const router = express.Router();

router.get("/:id/movie_credits", (req, res) => {
  const id = req.params.id;
  fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/:id/tv_credits", (req, res) => {
  const id = req.params.id;
  fetch(
    `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/popular", (req, res) => {
  const page = req.query.page;
  fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=${page}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});
module.exports = router;
