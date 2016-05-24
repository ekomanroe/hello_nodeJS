var express = require('express')

var app = express()

app.get('/hello',function(req, res){
  res.end("hello "+req.query.name)
})

app.listen(3000, function(){
  console.log("server start listening on port 3000")
})
