var router = require('express').Router();


var database = require('../models/database');

router.get('/:apartamento_id', async function(req, res){
    const {apartamento_id} = req.params;

    try {        
        var apartamento = await database.Apartamento.findOne({where: {id: apartamento_id}});
    } catch (error) {
        res.status(412).send({mensagem: error});
    }

    res.send({Apartamento: apartamento ? apartamento: 'Apartamento não encontrado'});

});

router.get('/', async function(req, res){
    const {apartamento_id} = req.params;

    try {        
        var apartamentos = await database.Apartamento.findAll();
    } catch (error) {
        res.status(412).send({mensagem: error});
    }

    res.send({Apartamentos: apartamentos != 0 ? apartamentos: 'Sem resultados'});
    
});

router.post('/', async function(req, res) {
    const {descapto, compapto, condominio_id} = req.body;

    try {
        
        if(!condominio_id) {
            return res.status(412).send({mensagem: 'Id condominio é obrigatório.'});
        }

        var apartamento = await db.Apartamento.create({descapto: descapto, compapto: compapto, condominio_id: condominio_id});
    
    } catch (error) {
        return res.status(412).send({mensagem: error});
    }

    res.send({Apartamento: apartamento});

});

router.put('/:apartamento_id', async function(req, res) {
    const {descapto, compapto, condominio_id} = req.body;
    const {apartamento_id} = req.params;

    try {
        
        var apartamento = await db.Apartamento.findOne({where: {id: apartamento_id}});

        if(!condominio_id || apartamento == 0) {
            return res.status(412).send({mensagem: 'Erro ao encontrar apartamento.'});
        }

        var new_apartamento = await apartamento.update({descapto: descapto, compapto: compapto, condominio_id: condominio_id});
    
    } catch (error) {
        return res.status(412).send({mensagem: error});
    }

    res.send({Apartamento: new_apartamento});

});

router.delete('/:apartamento_id', async function(req, res) {
    const {apartamento_id} = req.params;

    try {
        
        var apartamento = await db.Apartamento.findOne({where: {id: apartamento_id}});

        if(apartamento == 0) {
            return res.status(412).send({mensagem: 'Erro ao encontrar apartamento.'});
        }

        await apartamento.destroy({where: {id: apartamento_id}}); // n precisa por where, pois este where já é objeto no findOne
    
    } catch (error) {
        return res.status(412).send({mensagem: error});
    }

    res.send({mensagem: 'Apartamento excluído'});

});

router.post('/servico', async function(req, res) {
    const {nmservico, rgservico, nmempresa, apartamento_id} = req.body;

    try {
        
        if(!apartamento_id) {
            return res.status(412).send({mensagem: 'Id apartamento é obrigatório.'});
        }

        var servico = await db.Servico.create({nmservico: nmservico, rgservico: rgservico, nmempresa: nmempresa, apartamento_id:apartamento_id});
    
    } catch (error) {
        return res.status(412).send({mensagem: error});
    }

    res.send({Servico: servico});

});

router.get('/servico/:apartamento_id', async function(req, res){
    const {apartamento_id} = req.params;

    try {        
        var servico = await database.Servico.findAll({where: {apartamento_id: apartamento_id}});
    } catch (error) {
        res.status(412).send({mensagem: error});
    }

    res.send({Servico: servico != 0 ? servico : 'Serviços não foram encontrados para este apartamento.'});

});

module.exports = app => app.use('/apartamento', router);