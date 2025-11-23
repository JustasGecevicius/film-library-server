const express = require("express");
const router = express.Router();

router.get("/search", (req, res) => {
  const moviename = req.query.moviename;
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${moviename}&type=video&videoEmbeddable=true&key=${process.env.YOUTUBE_API_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
});

module.exports = router;
