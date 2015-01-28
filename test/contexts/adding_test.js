var Adding = require('../../contexts/adding');
var assert = require('assert');

describe(Adding, function() {
  it('should return the sum of two numbers', function() {
    assert.equal(Adding(2, 3), 5);
  });

  it('should be able to accept null numbers', function() {
    assert.equal(Adding(null, 0), 0);
  });

  it('should be able to accept undefined numbers', function() {
    // assert.equal(Adding(undefined, 0), NaN);
  });
});
