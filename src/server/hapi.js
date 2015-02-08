var Hapi = require('hapi');
var Good = require('good');

var merchantRoutes = require('./routes/merchants');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply('Hello, world!');
  }
});

merchantRoutes.forEach(function(route) {
  server.route(route);
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args:[{ log: '*', response: '*' }]
    }]
  }
}, function(err) {
  if (err) {
    throw err;
  }

  server.start(function() {
    server.log('info', 'Server running at: ', server.info.uri);
  });
})

module.exports = server;
