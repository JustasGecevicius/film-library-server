const express = require("express");
const router = express.Router();

router.get("/popular", (req, res) => {
  const page = req.query.page;
  fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=${page}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/top_rated", (req, res) => {
  const page = req.query.page;
  fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=${page}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/:id/recommendations", (req, res) => {
  const page = req.query.page;
  const id = req.params.id;
  fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/:id/credits", (req, res) => {
  const id = req.params.id;
  fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

router.get("/:id/watch/providers", (req, res) => {
  const id = req.params.id;
  fetch(
    `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US`
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
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

module.exports = router;
