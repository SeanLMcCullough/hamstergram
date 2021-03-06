const request = require('supertest')
const chai = require('chai')
const container = require('@/container')
const server = container.resolve('server')
const config = container.resolve('config')
const logger = container.resolve('logger')

// Silence loggers
for (let transport of logger.transports) transport.silent = true

global.expect = chai.expect
global.app = container
global.request = request(server.app)
global.config = config
global.logger = logger
