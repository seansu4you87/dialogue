var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var expect = chai.expect;

var Promise = require("bluebird");
var server = require("../server/hapi");

function request(options) {
  return new Promise(function(resolve, reject) {
    server.inject(options, resolve)
  });
}

module.exports = {
  chai: chai,
  expect: expect,
  Promise: Promise,
  server: server,
  request: request
}
