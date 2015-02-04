console.log("Knex and Bookshelf initialization, should only happen once!");
var Knex = require('knex');
var Bookshelf = require('bookshelf');
var path = require('path');

dbConfig = {
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
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(__dirname + "/../knex/migrations")
  },
};

var knex = new Knex(dbConfig);
knex.config = dbConfig;

var bookshelf = new Bookshelf(knex);

module.exports = bookshelf;
