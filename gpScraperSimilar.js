var gplay = require('google-play-scraper');
 
gplay.similar({appId: "com.whatsapp"}).then(console.log);