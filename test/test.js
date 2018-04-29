var expect = require('chai').expect;
var assert = require('chai').assert;

var processFile = require('../src/processFile');
var calculateScores = require('../src/calculateScores');
var sortScore = require('../src/sortScore');

var rules = require('../src/rules');

var text = "Lions 3, Snakes 3 Tarantulas 1, FC Awesome 0 Lions 1, FC Awesome 1 Tarantulas 3, Snakes 1 Lions 4, Grouches 0"

//Tests for calculate scores. 
describe('calculateScores', function () {

    it('should reject no input', function (done) {
        calculateScores().then(() => {
                done(new Error('Expected method to reject.'))
            })
            .catch((err) => {
                assert.isDefined(err);
                done();
            })
            .catch(done);
    });

    it('should calculate a draw', function () {
        calculateScores(['Lions 3, Snakes 3']).then((score) => {
            console.log(score);
            expect(score.Snakes).to.be.equal(rules.draw);
        });
    });

    it('should calculate a win', function () {
        calculateScores(['Lions 3, Snakes 0']).then((score) => {
            console.log(score);
            expect(score.Lions).to.be.equal(rules.win);
        });
    });

    it('should calculate a loss', function () {
        calculateScores(['Lions 3, Snakes 0']).then((score) => {
            console.log(score);
            expect(score.Snakes).to.be.equal(rules.loss);
        });
    });

    it('should return an object', function () {
        calculateScores(['Lions 3, Snakes 0']).then((score) => {
            console.log(score);
            expect(score.Lions);
        });
    });

});

//Processfile test handling
describe('processFile', function () {

    it('should input a txt file', function () {
        processFile("sample-input.txt").then( (data) => {
            //console.log(data);
        });
    });

    it('should reject no input', function (done) {
        processFile().then(() => {
                done(new Error('Expected method to reject.'))
            })
            .catch((err) => {
                assert.isDefined(err);
                done();
            })
            .catch(done);
    });

    it('should return an array', function () {
        processFile("sample-input.txt").then( (data) => {
            console.log(data);
            expect(data[0]).to.be.equal('Lions 3, Snakes 3');
        });
    });

});

describe('sortScores', function () {

    var obj = {
        'Snakes': 1,
        'Lions': 5,
        'FC Awesome': 1,
        'Tarantulas': 6,
        'Grouches': 0
    };

    it('should sort scores in descending order', function () {
        sortScore(obj).then((sorted) => {
            expect(sorted[0][0]).to.be.equal('Tarantulas');
        });
    });

    it('should sort alphabetically if scores are same', function () {
        sortScore(obj).then((sorted) => {
            expect(sorted[2][0]).to.be.equal('FC Awesome');
        });
    });

});