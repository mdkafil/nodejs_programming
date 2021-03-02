var gplay = require('google-play-scraper');
 
gplay.permissions({appId: "com.whatsapp"}).then(console.log);