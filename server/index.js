const express = require('express');
const bodyParser = require('body-parser');
const githubHelper = require(__dirname + '/../helpers/github');
const db = require(__dirname + '/../database')
let app = express();

app.use('/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (request, response) {
  return new Promise((resolve, reject) => {
    console.log('server side post request received!');
    let username = request.body.username;
    githubHelper.getReposByUsername(username)
    .then((repos) => {
      db.save(repos);
    })
    .then((savedRepos) => {
      response.status(201).send();
    })
    .catch((error) => {
      response.status(500).send(error);
    })
  })
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (request, response) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

