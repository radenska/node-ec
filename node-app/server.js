'use strict';

const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest (request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received`);
    console.log('request', request, 'response', response);
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(4242);
  console.log('Server has started.');
}

exports.start = start;
