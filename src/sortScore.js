// Sort teams by descending score.
// Returns an array of sorted teams

var sortScore = (scores) => {

    return new Promise(function (resolve, reject) {

        let score = [];
        //console.log(scores);

        for (var team in scores) {
            score.push([team, scores[team]]);
        }

        var sorted = score.sort( ( a, b ) => b[1] - a[1]);

        //If two scores are the same sort alphabetically
        resolve(sorted);
        //console.log(sorted);

    });
}

module.exports = sortScore;