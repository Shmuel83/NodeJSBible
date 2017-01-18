var http = require('http');
var xml2js = require('./lib_XML2JS/xml2js').parseString;
var fs = require("fs");

var myVerseStart = 1;
var myVerseStop = 2;
var myVersion = "darby";
var urlApi = "";

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
				process.exit();
			});
        });
    });
}

var args = process.argv.slice(2)
if (args[0] === '-h' || args[0] === '--help' || args[0] === 'help') {
  // process prints contents of `usage.txt` and returns
  console.log('\033[2J');
  console.log(fs.readFileSync("./help.txt", "UTF-8"));
  process.exit();
}
if(args[0] === '-v' || args[0] === '--version' || args[0] === 'version') {
	var JSONPackageFile = fs.readFileSync("./package.json", "UTF-8");
	var JSONPackage = JSON.parse(JSONPackageFile);
	console.log("Version of nodejsbible : "+JSONPackage.version);
	process.exit();
}
//Passage on arguments
if(args!="") {
	console.log(args);
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
	try {
		myVerseStart = Number((argPassage.split(':')[1]).split("-")[0]);
		//If only verse to display
		if(typeof(myVerseStop = (argPassage.split(':')[1]).split("-")[1])!="string") {
			myVerseStop = myVerseStart;		
		}
		myVerseStop = Number(myVerseStop);
		getTestPersonaLoginCredentials(urlApi);
		} catch (err) {
		console.log("You can add an argument, a reference or --help");
		process.exit();
	}
}
else {
	console.log("You can add an argument, a reference or --help");
}