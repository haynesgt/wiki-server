var express = require("express");
var app = express();
var db = require("./queries");

app.get('/api/pages', db.getAllPuppies);
app.get('/api/pages/:id', db.getSinglePuppy);
app.post('/api/pages', db.createPuppy);
app.put('/api/pages/:id', db.updatePuppy);
app.delete('/api/pages/:id', db.removePuppy);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

