﻿// modo de iniciação 1

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'pompeo2010',
        database: 'progresso'
    },
    pool: { min: 0, max: 7 }
});

module.exports = knex;