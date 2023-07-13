const express = require('express');
const youtubedl = require('youtube-dl-exec');
const fs = require('fs');


const app = express();

app.use(express.static('public'));


app.get('/download', async (req, res) => {
  const videoUrl = req.query.videoUrl;
  console.log("Video Url to download: ", videoUrl);

  // Download video here
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});