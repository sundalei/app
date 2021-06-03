if (process.env.MARIADB_HOST) module.exports = require('./mysql');
else module.exports = require('./sqlite');
