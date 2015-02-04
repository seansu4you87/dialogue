/*jslint node: true*/
'use strict';

var Promise = require('bluebird');
var knex = require('../initializers/bookshelf').knex;

var tables = [
  'merchants',
];

function truncate() {
  return Promise.each(tables, function(table) {
    console.log("truncating " + table);
    return knex.raw('truncate table ' + table + ' cascade');
  });
}

module.exports = {
  truncate: truncate
};
