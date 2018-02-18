const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  return new Promise((resolve, reject) => {
    let options = {
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };

    request.get(options, (error, response, body) => {
      if (error) {
        console.error('Error getting repos in github.js', error);
        return reject(error);
      }
      let repos;
      try {
        repos = JSON.parse(body).map((repo) => {
          return {
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            created: repo.created_at,
            updated: repo.updated_at,

            userid: repo.owner.id,
            username: repo.owner.login,
            useravatar: repo.owner.avatar_url,
            userprofile: repo.owner.html_url,
          };
        });
      } catch (err) {
        console.error('Error parsing repos in github.js', err);
        return reject(err);
      }
      resolve(repos);
    });
  });
}

module.exports.getReposByUsername = getReposByUsername;