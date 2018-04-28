const fs = require('fs');

// Take file as input and returns a promise or rejects if it doesn't contain
// the file. 

var processFile = (file) => {
    
    let matches = [];

    return new Promise(function (resolve, reject) {

        var lineReader = require('readline').createInterface({
            input: fs.createReadStream(file)
            });

          lineReader.on('line', function (line) {

            matches.push(line);

            resolve(matches);
            
          });
    });
    
}

module.exports = processFile;