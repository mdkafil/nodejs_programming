var gplay = require('google-play-scraper');
 
gplay.search({
    term: "Careem",
    num: 5
  }).then(console.log, console.log);