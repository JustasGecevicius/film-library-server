const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  fetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.THE_MOVIE_DB_API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

module.exports = router;
