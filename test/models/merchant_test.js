var Merchant = require('../../models/bookshelf/merchant');
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

      m.save().then(function (model) {
        assert.equal(model.isNew(), false);
        assert.equal(model.firstName, "Sean");
        assert.equal(model.firstName, "Yu");
        assert.equal(model.email, "seansu4you87@gmail.com");
        assert.equal(model.token, null);
        done();
      });
    });
  });
});
