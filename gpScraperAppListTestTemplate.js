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
  category: gplay.category.ART_AND_DESIGN,
  collection: gplay.collection.TOP_FREE,
  num: 1
}).then(console.log, console.log);

/* above call-back function receives "data" as its output and save it as JSON file
The same function could be used as-
.then(console.log(), console.log());
*/

gplay.list({
  category: gplay.category.ART_AND_DESIGN,
  collection: gplay.collection.TOP_PAID,
  num: 1
})
.then(console.log, console.log);

gplay.list({
    category: gplay.category.ART_AND_DESIGN,
    collection: gplay.collection.GROSSING,
    num: 1
  })
  .then(console.log, console.log);

  gplay.list({
    category: gplay.category.ART_AND_DESIGN,
    collection: gplay.collection.TRENDING,
    num: 1
  })
  .then(console.log, console.log); 

  gplay.list({
    category: gplay.category.ART_AND_DESIGN,
    collection: gplay.collection.NEW_FREE ,
    num: 1
  })
  .then(console.log, console.log);

  gplay.list({
    category: gplay.category.ART_AND_DESIGN,
    collection: gplay.collection.NEW_PAID,
    num: 1
  })
  .then(console.log, console.log);

  