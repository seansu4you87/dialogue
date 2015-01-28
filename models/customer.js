/*jslint node: true*/
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    firstName: DataTypes.String,
    lastName: DataTypes.String,
  }, {
    classMethods: {
    }
  });

  return Customer;
}
