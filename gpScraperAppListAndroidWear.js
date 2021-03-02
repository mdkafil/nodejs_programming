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

// Country codes
// https://www.iban.com/country-codes

// Language codes
// https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

/*
gplay.list({
  category: gplay.category.COMMUNICATION,
  collection: gplay.collection.TOP_FREE,
  country:'CN',
  lang:'zh',
  num: 20
})
.then(function(data){fs.writeFileSync('../GooglePlayApps/AndroidWear/AndroidWear_top_free.json',JSON.stringify(data))});
*/

gplay.reviews({
  appId: 'org.telegram.messenger',
  sort: gplay.sort.NEWEST,
  country:'cn',
  lang:'zh',
  num: 20
}).then(console.log, console.log);




/* above call-back function receives "data" as its output and save it as JSON file
The same function could be used as-
.then(console.log(), console.log());
*/


/*
gplay.list({
  category: gplay.category.DATING,
  collection: gplay.collection.TOP_PAID,
  // num: 1
})
.then(function(data){fs.writeFileSync('../GooglePlayApps/Dating/dating_top_paid.json',JSON.stringify(data))});

gplay.list({
    category: gplay.category.DATING,
    collection: gplay.collection.GROSSING,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Dating/dating_grossing.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.DATING,
    collection: gplay.collection.TRENDING,
    country: 'au',
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Dating/dating_trending_aus.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.DATING,
    collection: gplay.collection.TRENDING,
    // country: 'au',
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Dating/dating_trending.json',JSON.stringify(data))});

gplay.list({
    category: gplay.category.DATING,
    collection: gplay.collection.NEW_FREE,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Dating/dating_new_free.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.DATING,
    collection: gplay.collection.NEW_PAID,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Dating/dating_new_paid.json',JSON.stringify(data))});
  */