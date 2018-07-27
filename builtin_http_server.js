'use strict'

const http = require('http')
const server = http.createServer()
const PORT = 8000

server
  .on('request', onRequest)
  .on('listening', onListening)
  .listen(PORT)

function onRequest (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('You are still in a huge cave\r\n')
}

function onListening () {
  console.log('HTTP server listening on port', PORT)
}