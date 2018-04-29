// Takes an input array of <Team> <Score>, <Team> <Score>
// Returns an object of unsorted teams { Team: Score }

const rules = require('./rules');

const sanitizeObject = require('./sanitizeObject');

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

            //Split our teams in two by the ",".
            line = line.split(",");
            //console.log(line);

            //Initializer empty team objects for comparison.
            t1.name = "";
            t1.score = 0;

            t2.name = "";
            t2.score = 0;

            //Split our two team sections by spaces
            var team1 = line[0].split(" ");

            //Loop each team because the name can be longer than
            //one word.
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