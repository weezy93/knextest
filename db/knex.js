var environment = process.env.NODE_ENV || 'development';
var vonfig = require("../knexfile.js")[environment];
module.exports = require('knex')(config);

// creates the environment to use knex by including the environment and the knex config
