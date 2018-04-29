// Takes an input array of <Team> <Score>, <Team> <Score>
// Returns an object of unsorted teams { Team: Score }

const rules = require('./rules');

var calculateScores = (scores) => {

    return new Promise(function (resolve, reject) {

        if(!scores) {
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

            //Loop each team because the name can be longer than
            //One word
            for(var j = 0; j < team1.length; j++) {
                let value = team1[j];

                if(value.length > 0) {
                    t1.name += value;
                }
                console.log(t1.name);
            }
            
            var team2 = line[1].split(" ");
            for(var k = 0; j < team2.length; k++) {
                let value = team2[k];
            }
            console.log(team2);
        }   
            /*
            t1.name = line[0];
            t1.score = line[1].split(",")[0];

            t2.name = line[2];
            t2.score = line[3].split(",")[0];

            if (!score[t2.name]) score[t2.name] = 0;
            if (!score[t1.name]) score[t1.name] = 0;

            //Implicitly check for draws.
            if (t2.score == t1.score) {
                console.log("draw");

                score[t2.name] += rules.draw;


                score[t1.name] += rules.draw;

            }

            //Check for team win.
            if (t2.score > t1.score) {
                console.log(t2.name + "wins");

                if (!score[t2.name]) score[t2.name] = 0;

                score[t2.name] += rules.win;

            }

            //Check for team one win.
            if (t1.score > t2.score) {
                console.log(t1.name + "wins");

                if (!score[t1.name]) score[t1.name] = 0;

                score[t1.name] += rules.win;

            }
        }
        */
    
        resolve(score);

    });

}

module.exports = calculateScores;