'use strict'

import app from './app'
import winston from './utils/logger/winston'
import http from "http"
import socker from "./sockets/index"
require('dotenv').config()

/* LOCAL CONFIG */
const BASE_URL = app.get('baseUrl')
const PORT = app.get('port')
const ENV = app.get('env')


/**
 * Starts the server on the provided port
 */
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log('App is running on %s:%d in %s mode', BASE_URL, PORT, ENV, '\nPress CTRL-C to stop')
  winston.debug(`App is running on ${BASE_URL}:${PORT} in ${ENV} mode`)
})


/**
 * Start Socket
 */

socker(server)

export default server
