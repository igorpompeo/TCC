const express = require('express');
const app = express();

// chamada da conexão com o BD
const knex = require('./database');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/query_barra', function(req, res){
    let query = "SELECT acertoGeral, acertoEspec FROM prova_aluno WHERE id_aluno IN (SELECT id FROM aluno WHERE ra = '" + req.body.ra + "');";
    knex
        .raw(query)
        .then(result => {
            let geral = [], espec = [];

            result[0].map( _data => {
                geral.push( _data.acertoGeral );
                espec.push( _data.acertoEspec );
            })

            res.json({ acertoGeral: geral, acertoEspec: espec });
        })
});

app.post('/api/query_linha', function(req, res){
    let query = "SELECT notaProva FROM prova_aluno WHERE id_aluno IN (SELECT id FROM aluno WHERE ra = '" + req.body.ra + "');";
    knex
        .raw(query)
        .then(result => {
            let semestre = [];

            result[0].map( _data => {
                semestre.push( _data.notaProva );
            })

            res.json({ notas: semestre });
        })
});

app.post('/api/query_pizza', function (req, res) {
    let query = '	SELECT * FROM (\
        SELECT DISTINCT(curso.descricao) AS descricao, prova_aluno.notaProva AS notaProva\
        FROM curso LEFT JOIN prova_aluno ON curso.id = prova_aluno.id_curso \
        ORDER BY notaProva DESC\
    ) AS notas GROUP BY descricao';

    knex
        .raw(query)
        .then(result => {
            let notas = [], curso = [];
            result[0].map( _data => {
                notas.push(_data.notaProva);
                curso.push(_data.descricao)
            });

            res.json({ curso: curso, notas: notas })
        })
})

app.post('/api/login', (req, res) => {
    //req.body pega as infos enviadas por post
    knex('usuarios').select('login','senha').where({
        login: req.body.login,
        senha: req.body.senha
    }).then(result => {
        if(result.length === 0 )
        {
            // login não autorizado
            res.json({ autorizado: false })
        } else {
            // login autorizado
            knex('aluno')
                .select('pNome','sNome')
                .where({ ra: req.body.login })
                .then( result => {
                    console.log(result);
                    res.json({
                        autorizado: true,
                        ra: req.body.login,
                        nome: result[0].pNome + " " + result[0].sNome
                    });
                } );
        }
    })
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});