/* @flow */

var bookshelf = require('../initializers/bookshelf');
var _ = require('lodash');
var uuid = require('node-uuid');

function snakeCaseAttrs(attrs: Object): Object {
  return _.reduce(attrs, function(memo: Object, val: string, key: string) {
    memo[_.snakeCase(key)] = val;
    return memo;
  }, {});
}

function camelCaseAttrs(attrs: Object): Object {
  return _.reduce(attrs, function(memo: Object, val: string, key: string) {
    memo[_.camelCase(key)] = val;
    return memo;
  }, {});
}

class C {
  x: string;
  y: number;
  constructor(x) { this.x = x; }
  foo(y) { this.y = y; }
  bar() { return this.x; }
}

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];
var a3 = a.map( s => s.length );

var Merchant = bookshelf.Model.extend({
  tableName: "merchants",

  initialize: function () {
    this.on('saving', function () {
      this.set('token', uuid.v4());
    });
  },

  format: snakeCaseAttrs,
  parse: camelCaseAttrs
});

module.exports = Merchant;
