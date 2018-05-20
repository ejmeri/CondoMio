var router = require('express').Router();

var database = require('../models/database');

router.get('/:contrato_id', async function (req, res){
    var contrato_id = req.params;

    try {
        
        var contrato = await database.Contrato.findOne({where: {id: contrato_id}});

    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Contrato: contrato ? contrato: 'Sem resultado'});
});

router.get('/condomino/:condomino_id', async function (req, res){
    var condomino_id = req.params;

    try {        
        var contrato = await database.Contrato.findAll({where: {condomino_id: condomino_id}});
    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Contrato: contrato ? contrato: 'Sem resultado'});
});

router.get('/apartamento/:apartamento_id', async function (req, res){
    var apartamento_id = req.params;

    try {
        var contrato = await database.Contrato.findAll({where: {apartamento_id: apartamento_id}});
    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Contrato: contrato ? contrato: 'Sem resultado'});
});

router.post('/', async function(req, res){
    var contrato = database.Contrato;
    contrato = req.body;

    try {
        
        if(!contrato.condomino_id || !contrato.apartamento_id){
            return res.status(412).send({Mensagem: 'Campos obrigatórios devem estar preenchidos.'});
        }
        else {
            var new_contrato = await database.Contrato.create(contrato);
        }
    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Contrato: new_contrato});
});

module.exports = app => app.use('/contrato', router);