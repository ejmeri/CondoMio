var router = require('express').Router();

var database = require('../models/database');

router.get('/:condomino_id', async function(req, res) {
    const {condomino_id} = req.params;

    try {
        var condomino = await database.Condomino.findOne({where: {id: condomino_id}});
    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Condomino: condomino ? condomino : 'Condomino não encontrado'});
});

router.post('/', async function(req, res) {
    var condomino = database.Condomino;
    condomino = req.body;

    try {
        
        var retorno = await database.Condomino.create(condomino);

    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Condomino: retorno});
});

router.put('/:condomino_id', async function(req, res) {
    var {condomino_id} =  req.params;
    var condomino = database.Condomino;
    condomino = req.body;

    try {
        var retorno = await database.Condomino.findOne({where: { id: condomino_id }});

        if(retorno)
            var new_cond = await retorno.update(condomino);

    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Condomino: new_cond});
});

router.post('/encomenda', async function(req, res) {
    var encomenda = database.Encomenda;
    encomenda = req.body;

    try {
        var retorno = await database.Encomenda.create(encomenda);
    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Encomenda: retorno});
});

router.put('/encomenda/:encomenda_id', async function(req, res) {
    var {encomenda_id} = req.params; 
    var encomenda = database.Encomenda;
    encomenda = req.body;

    try {
        var retorno = await database.Encomenda.findOne({where: {id: encomenda_id}});

        if(retorno)
            var new_enc = await retorno.update(encomenda);

    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Encomenda: new_enc});
});

router.post('/reserva', async function(req, res) {
    var reserva = database.Reserva;
    reserva = req.body;

    try {
        var retorno = await database.Reserva.create(reserva);
    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Reserva: retorno});
});

router.put('/reserva/:reserva_id', async function(req, res) {
    var {reserva_id} = req.params; 
    var reserva = database.Reserva;
    reserva = req.body;

    try {
        var retorno = await database.Reserva.findOne({where: {id: reserva_id}});

        if(retorno)
            var new_res = await retorno.update(reserva);

    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Reserva: new_res});
});


module.exports = app => app.use('/condomino', router);