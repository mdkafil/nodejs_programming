var gplay = require('google-play-scraper');
 
gplay.reviews({
  appId: 'com.samsung.android.email.provider',
  sort: gplay.sort.RATING
}).then(console.log, console.log);