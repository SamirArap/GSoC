const mocha = require('mocha');
const assert = require('chai').assert;

// const myApp = require('./main');
const myMegaphone = require('./main').myMegaphone;

const res = 'Text';

describe('calling megaphone ...', function() {
  it('should return uppercase', function() {
    var returend = myMegaphone(res);
    assert.equal(returend, 'TEXT');
  });
  it('should return special string when nothing is supplied', function() {
    var returend = myMegaphone('');
    assert.equal(returend, "LOUD AND UNBEARABLE FEEDBACK NOISE");
  });
});