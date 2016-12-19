var express = require('express'),
    app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
})

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});

console.log('hello from node')