console.log("Knex and Bookshelf initialization, should only happen once!");
var Knex = require('knex');
var Bookshelf = require('bookshelf');
var path = require('path');
var dbConfig = require('../knex/knexfile')[process.env.NODE_ENV || "development"];

var knex = new Knex(dbConfig);
knex.config = dbConfig;

var bookshelf = new Bookshelf(knex);

module.exports = bookshelf;
