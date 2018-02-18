const express = require('express');
const bodyParser = require('body-parser');
const githubHelper = require(__dirname + '/../helpers/github');
const db = require(__dirname + '/../database');
const Promise = require('bluebird');
let app = express();

app.use('/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (request, response) {
  let username = request.body.username;
  githubHelper.getReposByUsername(username)
  .then((repos) => {
    db.save(repos);
  })
  .then(() => response.status(201).send())
  .catch(error => response.status(500).send(error));
});

app.get('/repos', function (request, response) {
  db.retrieve(25, 'updated', 'desc')
  .then(repos => response.send(repos))
  .catch(error => response.status(500).send(error));
});
 
let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

