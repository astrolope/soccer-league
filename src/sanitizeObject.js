// Takes an input of an object, and a single array containing tokenized team / score info.
// Returns an object containing Team Name and Score.

var sanitizeObject = (obj, arr) => {

    for (var j = 0; j < arr.length; j++) {
        let value = arr[j];

        if (value == null) {
            j++;
        }

        // If we're less than the last value increment our team name.
        if (j < arr.length - 1) {
            obj.name += value;
            obj.name += ' ';
        }

        //Grab the last value as the score.
        if (j == arr.length - 1) {
            obj.score += Number(value);
            obj.name = obj.name.trim();
        }

    }

    return obj;
};

module.exports = sanitizeObject;