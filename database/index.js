const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  description: String,
  created: Date,
  updated: Date,

  userid: Number,
  username: String,
  useravatar: String,
  userprofile: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  return new Promise((resolve, reject) => {
    Repo.insertMany(repos)
    .then(docs => {
      console.log(docs);
      resolve(docs);
    })
    .catch(error => {
      console.error(error);
      reject(error);
    });
  });
};

module.exports.save = save;