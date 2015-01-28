var Customer = require('../../models/index').Customer;
var expect = require('chai').expect;

describe(Customer, function () {
  describe('#save', function () {
    it('should save', function (done) {
      var c = Customer.build({
        firstName: "Rhea",
        lastName: "Kaw",
      });

      expect(c.isNewRecord).to.be.true();
      c.save()
        .complete(function(err) {
          if(!!err) {
            console.log(err);
            expect(err).to.not.exist();
          } else {
            expect(c.isNewRecord).to.be.false();
            expect(c.firstName).to.eql("Rhea");
            expect(c.lastName).to.eql("Kaw");
          }
          done();
        });
    });
  });
});
