var expect = require('../test_helper').expect;
var Promise = require("bluebird");
var Merchant = require('../../models/merchant');

describe("Merchant", function() {
  describe('#save', function() {
    it('should save', function() {
      var m = new Merchant({
        firstName: "Dee",
        lastName: "Reynolds",
        email: "dee@paddyspub.com"
      });
      expect(m.isNew()).to.be.true;

      var promise = m.save();
      return Promise.all([
        expect(promise).to.eventually.have.deep.property("attributes.firstName").that.eqls("Dee"),
        expect(promise).to.eventually.have.deep.property("attributes.lastName").that.eqls("Reynolds"),
        expect(promise).to.eventually.have.deep.property("attributes.email").that.eqls("dee@paddyspub.com"),
        expect(promise).to.eventually.have.deep.property("attributes.token").that.is.a("string")
      ]);
    });
  });
});
