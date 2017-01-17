var http = require('http');
const readline = require('readline');
var xml2js = require('./lib_XML2JS/xml2js').parseString;

var myBook = "Jn";
var myChapt = 1;
var myVerseStart = 1;
var myVerseStop = 2;
var myVersion = "darby";
var urlApi = "";
/*
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
server.listen(8080);
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function requestVerseStop() {
		rl.question('Verse Stop? ', function(answer) {
		rl.close();
		process.stdin.destroy();
		myBook = Number(answer);
	});	
}

function requestVerseStart() {
		rl.question('Verse Start? ', function(answer) {
		myBook = Number(answer);
		rl.close();
		process.stdin.destroy();
		requestVerseStop();
	});	
}

function requestChapter() {
		process.stdin.destroy();	
		rl.question('Chapt? ', function(answer) {
		myChapt = Number(answer);
		rl.close();
		requestVerseStart();
		process.stdin.destroy();		
	});
}

function requestBook() {
  rl.question('Book? ', function(answer) {
  myBook = answer;
  rl.close();
  //requestChapter();
  getTestPersonaLoginCredentials();
  process.stdin.destroy();  
  });
  
}

function getTestPersonaLoginCredentials(callback) {
return http.get({
        host: "api.preachingcentral.com",
		path: callback
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            // Data reception is done, do whatever with it!
            var parsed = body;
			//console.log(parsed);
			xml2js(parsed, function (err, result) {
				for(var i=0; i<=(myVerseStop-myVerseStart); i++) {
					var myjson = result.bible.range[0].item[i].text;
					console.log(myjson);
				}
			});
        });
    });
}
//requestBook();
//Passage on arguments
if(process.argv.slice(2)) {
	var argPassage = "";
	
	//Version of bible on argument
	if(process.argv.length == 4) {
		argPassage = process.argv.slice(2,3)+"";
		myVersion = process.argv.slice(3);
	}
	//No version of bible. To have version by default
	if(process.argv.length == 3) {
		argPassage = process.argv.slice(2)+"";
	}
	//Url do query API
	urlApi = "/bible.php?passage="+argPassage+"&version="+myVersion;
	
	//Display reference number
	console.log("\n"+argPassage + " "+myVersion+"\n");
	
	//Formating verses to calculate number of verses to display
	myVerseStart = Number((argPassage.split(':')[1]).split("-")[0]);
	//If only verse to display
	if(typeof(myVerseStop = (argPassage.split(':')[1]).split("-")[1])!="string") {
		myVerseStop = myVerseStart;		
	}
	myVerseStop = Number(myVerseStop);
	
}
else {
	urlApi = "/bible.php?passage="+myBook+myChapt+":"+myVerseStart+"-"+myVerseStop+"&version="+myVersion;
}
getTestPersonaLoginCredentials(urlApi);