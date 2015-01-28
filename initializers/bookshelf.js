var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'yourapp',
    password: 'dbpass',
    database: 'dialogue',
    charset: 'utf8'
  }
});

console.log("hello");

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
