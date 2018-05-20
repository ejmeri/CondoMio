var router = require('express').Router();

var database = require('../models/database');

router.post('/', async function(req, res) {
    var visitante = database.Visitante;
    try {
        var retorno = database.Visitante.create(visitante);
    } catch (error) {
        return  res.status(412).send({Mensagem: error});
    }
    res.send({Visitante: retorno});
});

router.post('/visitante_condomino', async function(req, res) {
    var visitante_condomino = database.Visitante_Condomino;
    try {
        var retorno = database.Visitante_Condomino.create(visitante_condomino);
    } catch (error) {
        return  res.status(412).send({Mensagem: error});
    }
    
    res.send({Visitante_Condomino: retorno});
});

module.exports = app => app.use('/visitante', router);