// Takes an input array of <Team> <Score>, <Team> <Score>
// Returns an object of unsorted teams { Team: Score }

const rules = require('./rules');

var sanitizeObject = (obj, arr) => {

    for (var j = 0; j < arr.length; j++) {
        let value = arr[j];

        if (value == null) {
            j++;
        }

        if (j < arr.length - 1) {
            obj.name += value;
            obj.name += ' ';
        }

        if (j == arr.length - 1) {
            obj.score += Number(value);
            obj.name.replace(/^\s+|\s+$/g, "");
        }


    }

    return obj;
}

var calculateScores = (scores) => {

    return new Promise( (resolve, reject) => {

        if (!scores) {
            reject("No Scores");
        }

        let line;
        let t1 = {};
        let t2 = {};
        let score = {};

        for (var i = 0; i < scores.length; i++) {

            line = scores[i];

            //Split our line by the ",".
            line = line.split(",");
            //console.log(line);

            //Split our two team sections by spaces
            var team1 = line[0].split(" ");

            t1.name = "";
            t1.score = 0;

            t2.name = "";
            t2.score = 0;

            //Loop each team because the name can be longer than
            //One word
            sanitizeObject(t1, team1);
            
            var team2 = line[1].split(" ");
            
            sanitizeObject(t2, team2);

            //console.log(t2);

            if (!score[t2.name]) score[t2.name] = 0;
            if (!score[t1.name]) score[t1.name] = 0;

            //Implicitly check for draws.
            if (t2.score == t1.score) {

                score[t2.name] += rules.draw;
                score[t1.name] += rules.draw;

            }

            //Check for team win.
            if (t2.score > t1.score) {

                score[t2.name] += rules.win;

            }

            //Check for team one win.
            if (t1.score > t2.score) {

                score[t1.name] += rules.win;

            }
        }


        resolve(score);

    });

}

module.exports = calculateScores;