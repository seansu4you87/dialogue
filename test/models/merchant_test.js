var Merchant = require('../../models/bookshelf/merchant');
var expect = require('chai').expect;
var assert = require('assert');

describe(Merchant, function () {
  describe('#save', function () {
    it('should save', function (done) {
      var m = new Merchant({
        firstName: "Sean",
        lastName: "Yu",
        email: "seansu4you87@gmail.com",
      })
      assert.equal(m.isNew(), true);
      expect(m.isNew()).to.be.true();

      m.save().then(function (model) {
        expect(m.isNew()).to.be.false();
        expect(m.get('firstName')).to.eql("Sean");
        expect(m.get('lastName')).to.eql("Yu");
        expect(m.get('email')).to.eql("seansu4you87@gmail.com");
        expect(m.get('token')).to.not.be.false();
        done();
      });
    });
  });
});
