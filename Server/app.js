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

    knex.select('pNome').from('aluno').then(result =>{
        console.log(result);
    });

});

// endpoint verificacao login
app.post('/api/login', (req, res) => {

    //req.body pega as infos enviadas por post
    console.log(req.body);

    // fazer logica de validação e retornar json se esta autenticado ou não
    res.json({
        autorizado: true
    });

});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});