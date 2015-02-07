var Merchant = require('../models/merchant');


function CreatingMerchant(params) {
  return Merchant.forge(params)
      .save()
      .error(function(e) {
        if (e.message == "duplicate key value violates unique constraint \"merchants_email_unique\"") {
          throw new CreatingMerchant.EmailAlreadyUsedError(params.email);
        }
      });
}

function EmailAlreadyUsedError(email) {
  this.name = "EmailAlreadyUsedError";
  this.message = "Email already used: " + email;
}
EmailAlreadyUsedError.prototype = Object.create(Error.prototype);
EmailAlreadyUsedError.prototype.constructor = EmailAlreadyUsedError;
CreatingMerchant.EmailAlreadyUsedError = EmailAlreadyUsedError;

module.exports = CreatingMerchant;
