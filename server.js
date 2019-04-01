const express = require('express')

const server = express()


server.use("/dist",express.static("dist"))

server.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

module.exports = server
