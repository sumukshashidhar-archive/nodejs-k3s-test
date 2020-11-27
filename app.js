const express = require("express");
const os = require('os')
const app = express();

app.listen( "80", "0.0.0.0", function() {
    console.log(`Listening on 3000`)
})

app.get('/', function(req, res) {
    res.send(`Hello From ${process.env.PORT || 3000} and ${os.hostname}`)
})
