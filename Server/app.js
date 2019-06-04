const express = require('express');
const app = express();
// chamada da conexão com o BD
const knex = require('./database');
const bodyParser = require('body-parser');

app.use(bodyParser());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/query', function(req, res){
// comando na conexão criada

    knex.select('id', 'ra', 'pNome').from('aluno').where({
        id: '1148',
        ra: '20198778'
    }).then(result =>{
        console.log(result);
        res.json(result);
    });

});

// endpoint verificacao login
app.post('/api/login', (req, res) => {

    //req.body pega as infos enviadas por post
    console.log(req.body);

    // fazer logica de validação e retornar json se esta autenticado ou não
    if (knex.select('login','senha').from('usuarios').where({
        login: '20198778',
        senha: '1234'
    }).then(result => {
        
        res.json({
            autorizado: true
        });
    })) {
        // res.json({
        //     autorizado: true
        // });
    } else {
        res.json({
            autorizado: false
        });
    }

});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});