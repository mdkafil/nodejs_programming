var gplay = require('google-play-scraper');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const root = '../GooglePlayApps'

/**
 * important Links-
 * https://alphacoder.xyz/nodejs-unhandled-promise-rejection-warning/
 * http://callbackhell.com/
 * 
 */




function sendDirSync(dir) {
  let items
  try {
   items = fs.readdirSync(dir)
  //  return items
  } catch (err) {
   return console.log("no such directory")
  }
 
  let dirList = []
  count=0
  items.forEach(item => {
  directoryPath = path.join(dir, item)
  // console.log(directoryPath)
  if (fs.statSync(directoryPath).isDirectory()){
    // console.log("Yes")
    dirList[count]= directoryPath
    count = count+1
    // console.log(count)
    
  }
  // console.log(item)
  })

return dirList
 }

 function sendAppList(dir) {
  let items
  try {
   items = fs.readdirSync(dir)
  //  return items
  } catch (err) {
   return console.log("no such directory")
  }
  
  let appListPath
  items.forEach(item => {
  directoryPath = path.join(dir, item)
  // console.log(directoryPath)
  if(path.extname(directoryPath)==".txt")
    {
      // console.log("YES")
      appListPath= directoryPath
    }
  })
  return appListPath
 }


function createDir(dir){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log("Directory Created!")
}else{
    console.log("Directory Already Exists!")
}
}

function extractReviews(appList_file,dir){
  let rl = readline.createInterface({
    input: fs.createReadStream(appList_file)
});

let line_no = 0;

// event is emitted after each line
rl.on('line', function(line) {
    line_no++;
    console.log(line);

    var file_path1 = dir+'/'+line+'_rating_reviews.json'
    console.log(file_path1);
    
    let ratingResults =gplay.reviews({
      appId: line,
      sort: gplay.sort.RATING,
      num:1000,
      throttle:10
    });
    
    ratingResults.then(function(data){fs.writeFileSync(file_path1,JSON.stringify(data))}).catch(function(err) {
      console.log('error: ', err);
  });

    // fs.close();

    var file_path2 = dir+'/'+line+'_newest_reviews.json'

    let helpfulResults =gplay.reviews({
      appId: line,
      sort: gplay.sort.HELPFULNESS,
      num:1000,
      throttle:10
    });
    
    helpfulResults.then(function(data){fs.writeFileSync(file_path2,JSON.stringify(data))}).catch(function(err) {
      console.log('error: ', err);
  });
    
  var file_path3 = dir+'/'+line+'_helpful_reviews.json'

    let newestResults =gplay.reviews({
      appId: line,
      sort: gplay.sort.NEWEST,
      num:1000,
      throttle:10
    });
    
    newestResults.then(function(data){fs.writeFileSync(file_path3,JSON.stringify(data))}).catch(function(err) {
      console.log('error: ', err);
  });

});


// end
// rl.on('close', function(line) {
//     console.log('Total lines : ' + line_no);
// });




}



let items= sendDirSync(root)
console.log(items)

items.forEach(item =>{ let appList=sendDirSync(item)
appList.forEach(appListInDir =>{

  reviewDirectory = path.join(appListInDir, "reviews")
  createDir(reviewDirectory)
  extractReviews(sendAppList(appListInDir),reviewDirectory)

  // console.log(appListInDir)
  // console.log(sendAppList(appListInDir))

})
})




// fs.readFile('../GooglePlayApps/Art_and_Design/allApp_art_and_design_grossing.txt', 'utf8', function(err, contents) {
//     console.log(contents);
// });