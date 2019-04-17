const express = require('express')

const server = express()

server.use('/dist', express.static('dist'))

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

server.get('/faq', (req, res) => {
  res.sendFile(__dirname + '/faq.html')
})
server.get('/privacy', (req, res) => {
  res.sendFile(__dirname + '/privacy.html')
})
server.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})
server.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
})

module.exports = server
