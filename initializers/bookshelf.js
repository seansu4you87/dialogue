var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: "15432",
    user: 'dialogue',
    password: 'talkdirty2me',
    database: 'dialogue',
    charset: 'utf8'
  },
  pool: {
    min: 2,
    max: 10
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
