/*jslint node: true*/
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    classMethods: {
      tableName: "customers",
      timestamps: true,
    }
  });

  return Customer;
}
