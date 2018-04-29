// Import functions.
let processFile = require('./src/processFile');
let calculateScores = require('./src/calculateScores');
let sortScore = require('./src/sortScore');

let fileToProcess;
let dataToProcess;

//Check for file name in arguments.
const checkArguments = () => {
    if (process.argv.length < 3) {
        console.log("USAGE: node soccer-league.js <FILE.txt>");
        process.exit(1);
    } else {
        fileToProcess = process.argv[2];
    }
};

//Check our file.
checkArguments();

//Strip file into a line-by-line array.
processFile(fileToProcess).then(function (data) {

    //Process file into an unsorted team: score object.
    calculateScores(data).then(function (teams) {

        //Finally, sort the score into a list.
        sortScore(teams);

    });

});