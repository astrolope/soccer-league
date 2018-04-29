// Sort teams by descending score.
// Returns an array of sorted teams

var sortScore = (scores) => {

    return new Promise(function (resolve, reject) {

        let score = [];
        //console.log(scores);

        for (var team in scores) {
            score.push([team, scores[team]]);
        }

        var sorted = score.sort((a, b) => {

            //If our scores are the same sort alphabetically.
            if (b[1] === a[1]) {
                if (a[0] < b[0]) return -1;
                if (a[0] > b[0]) return 1;
                return 0;
            }
            //If scores aren't the same sort by score.
            return b[1] - a[1];

        });

        //sorted = sorted.sort();

        //If two scores are the same sort alphabetically
        resolve(sorted);
        //console.log(sorted);

    });
}

module.exports = sortScore;