# Fullstack Review Task List

 - [X] Draw a diagram of the app with client, server, and DB
 - [X] Draw a schema and complete the Repos schema in `database/index.js`
 - [X] Use jQuery to send a `POST` to `/repos` when user enters a username into the text field
 - [X] complete `getReposByUsername` function in `helpers/github.js` (use npm `request` module to fetch a user's github repos)
 - [X] complete `save` function in `database/index.js`. should save data from github api in the mongo database
 - [X] complete `POST /repos` endpoint on the express server. Use `getReposByUsername` to fetch the repos, then use the `save` function to store it in the database
 - [X] write a `GET /repos` endpoint to retrieve top 25 repos from the database, sorted by criteria decided on earlier
 - [ ] refactor client so when the page loads, the top 25 repos are displayed on the page
 - [ ] make each repo's name in the table link to that repo's page on github
 - [ ] after entering a github handle in the form, update page with latest top 25 without a page refresh
 - [ ] complete _Getting Started with NodeJS on Heroku_
