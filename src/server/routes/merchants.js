var CreatingMerchant = require('../../contexts/creating_merchant');
var Boom = require('boom');

var create = {
  method: 'POST',
  path: '/merchants',
  handler: function(request, reply) {
    var params = {
      firstName: request.payload.first_name,
      lastName: request.payload.last_name,
      email: request.payload.email
    };

    CreatingMerchant(params)
        .then(function(merchant) {
          reply({
            first_name: merchant.attributes.firstName,
            last_name: merchant.attributes.lastName,
            email: merchant.attributes.email,
            token: merchant.attributes.token
          }).code(201);
        })
        .catch(CreatingMerchant.EmailAlreadyUsedError, function(e) {
          reply(Boom.wrap(e, 409));
        });
  }
};

module.exports = [
  create
]
