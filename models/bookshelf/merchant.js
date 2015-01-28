var bookshelf = require('../../initializers/bookshelf');

var Merchant = bookshelf.Model.extend({
  tableName: "merchants"
});

module.exports = Merchant;
