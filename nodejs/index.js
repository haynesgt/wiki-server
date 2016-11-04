var express = require("express");
var app = express();
var db = require("./queries");

app.get('/api/puppies', db.getAllPuppies);
app.get('/api/puppies/:id', db.getSinglePuppy);
app.post('/api/puppies', db.createPuppy);
app.put('/api/puppies/:id', db.updatePuppy);
app.delete('/api/puppies/:id', db.removePuppy);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

