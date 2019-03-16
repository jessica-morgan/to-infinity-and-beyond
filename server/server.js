const path = require('path')

const cors = require('cors')
const express = require('express')

const router = require('./routes')
const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))

server.use('/', router)

server.use(express.static(path.join(__dirname, '../public')))


module.exports = server
