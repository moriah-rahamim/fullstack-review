const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  html_url: String, // repository url
  description: String,
  created_at: Date,
  updated_at: Date,

  owner_id: Number,
  owner_login: String, // username
  avatar_url: String,
  owner_html_url: String // user profile url
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;