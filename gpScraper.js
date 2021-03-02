var gplay = require('google-play-scraper');
 
gplay.app({appId: 'com.talkatone.android'})
  .then(console.log, console.log);