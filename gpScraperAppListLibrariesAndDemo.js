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
  category: gplay.category.Libraries_and_Demo,
  collection: gplay.collection.TOP_FREE,
  // num: 1
})
.then(function(data){fs.writeFileSync('../GooglePlayApps/Libraries_and_Demo/libraries_and_demo_top_free.json',JSON.stringify(data))});

/* above call-back function receives "data" as its output and save it as JSON file
The same function could be used as-
.then(console.log(), console.log());
*/

gplay.list({
  category: gplay.category.Libraries_and_Demo,
  collection: gplay.collection.TOP_PAID,
  // num: 1
})
.then(function(data){fs.writeFileSync('../GooglePlayApps/Libraries_and_Demo/libraries_and_demo_top_paid.json',JSON.stringify(data))});

gplay.list({
    category: gplay.category.Libraries_and_Demo,
    collection: gplay.collection.GROSSING,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Libraries_and_Demo/libraries_and_demo_grossing.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.Libraries_and_Demo,
    collection: gplay.collection.TRENDING,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Libraries_and_Demo/libraries_and_demo_trending.json',JSON.stringify(data))});

gplay.list({
    category: gplay.category.Libraries_and_Demo,
    collection: gplay.collection.NEW_FREE,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Libraries_and_Demo/libraries_and_demo_new_free.json',JSON.stringify(data))});

  gplay.list({
    category: gplay.category.Libraries_and_Demo,
    collection: gplay.collection.NEW_PAID,
    // num: 1
  })
  .then(function(data){fs.writeFileSync('../GooglePlayApps/Libraries_and_Demo/libraries_and_demo_new_paid.json',JSON.stringify(data))});