var Merchant = require('../../models/bookshelf/merchant');
var expect = require('chai').expect;
var databaseHelper = require('../database_helper');

describe(Merchant, function () {
  beforeEach(function() {
    return dbHelper.truncate();
  });

  describe('#save', function () {
    it('should save', function (done) {
      var m = new Merchant({
        firstName: "Sean",
        lastName: "Yu",
        email: "seansu4you87@gmail.com",
      });
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
