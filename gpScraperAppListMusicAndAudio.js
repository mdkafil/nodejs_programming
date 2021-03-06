var gplay = require('google-play-scraper');
const fs = require('fs'); 

/* 
  TOP_FREE: 'topselling_free',
  TOP_PAID: 'topselling_paid',
  GROSSING: 'topgrossing',
  TRENDING: 'movers_shakers',
  NEW_FREE: 'topselling_new_free',
  NEW_PAID: 'topselling_new_paid',
*/

gplay.list({
  category: gplay.category.MUSIC_AND_AUDIO,
  collection: gplay.collection.TOP_FREE,
  // num: 1
})
.then(function(data){fs.writeFileSync('../GooglePlayApps/Music_and_Audio/music_and_audio_top_free.json',JSON.stringify(data))});

/* above call-back function receives "data" as its output and save it as JSON file
The same function could be used as-
.then(console.log(), console.log());
*/

gplay.list({
  category: gplay.category.MUSIC_AND_AUDIO,
  collection: gplay.collection.TOP_PAID,
  // num: 1
})
.then(function(data){fs.writeFileSync('../GooglePlayApps/Music_and_Audio/music_and_audio_top_paid.json',JSON.stringify(data))});

gplay.list({
    category: gplay.category.MUSIC_AND_AUDIO,
    collection: gplay.collection.GROSSING,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Music_and_Audio/music_and_audio_grossing.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.MUSIC_AND_AUDIO,
    collection: gplay.collection.TRENDING,
    country: 'au',
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Music_and_Audio/music_and_audio_trending_aus.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.MUSIC_AND_AUDIO,
    collection: gplay.collection.TRENDING,
    // country: 'au',
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Music_and_Audio/music_and_audio_trending.json',JSON.stringify(data))});

gplay.list({
    category: gplay.category.MUSIC_AND_AUDIO,
    collection: gplay.collection.NEW_FREE,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Music_and_Audio/music_and_audio_new_free.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.MUSIC_AND_AUDIO,
    collection: gplay.collection.NEW_PAID,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Music_and_Audio/music_and_audio_new_paid.json',JSON.stringify(data))});