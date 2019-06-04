// modo de iniciação 1

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

var pg = require('knex')({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public']
});

var mysql = require('mysql');

var pg = require('knex')({client: 'pg'});



function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'pompeo2010',
        database: 'progresso'
    });

    connection.connect();

    connection.query(sqlQry, function (error, results, fields) {
       console.log(error);
       console.log(results);
        connection.end();
        console.log('executou!');
    });
}

module.exports = knex;