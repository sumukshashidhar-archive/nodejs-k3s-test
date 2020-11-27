const express = require("express");
const os = require('os')
const app = express();

app.listen( "80", "0.0.0.0", function() {
    console.log(`Listening on 80`)
})

app.get('/', function(req, res) {
    res.send(`Hello From 80 and ${os.hostname}`)
})
