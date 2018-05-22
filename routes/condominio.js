var express = require('express');
var router = express.Router();


var database = require('../models/database');

router.get('/', (req, res) => {
    res.send('Rota para informações do condominio');
});


router.get('/:condominio_id', async function (req, res) {
    var condominio_id = req.params.condominio_id;

    try {
        var condominio = await database.Condominio.findOne({where: {id : condominio_id}});
    } catch (error) {
        res.status(412).send({Mensagem: error});
    }

    res.send({Condominio: condominio});
});

router.post('/', async function(req, res) {
    const {nmcondominio} = req.body;

    try {  
        if(nmcondominio == '') {
            res.status(412).send({mensagem: 'Nome do condominio é obrigatório'});
        }
        else {
            var condominio = await database.Condominio.create({nmcondominio: nmcondominio});
        }
    } catch (error) {
        res.status(412).send({mensagem: error});
    }

    res.send({Condominio: condominio});
});

router.put('/:condominio_id', async function(req, res) {
    const {nmcondominio} = req.body;
    const {condominio_id} = req.params;


    try {  
        if(nmcondominio == '' || condominio_id == null) {
            res.status(412).send({mensagem: 'Nome do condominio e id condominio são obrigatórios'});
        }
        else {

            var condominio = await database.Condominio.findOne({where:{id: condominio_id}});

            if(!condominio) {
                res.status(412).send({mensagem: 'Informações não encontradas'});    
            }
            else {
                var new_condominio = await condominio.update({nmcondominio: nmcondominio});
            }

        }
    } catch (error) {
        res.status(412).send({mensagem: error});
    }

    res.send({Condominio: new_condominio});
});

router.post('/funcionario', async function(req, res) {
    var funcionario = database.Funcionario;
    funcionario = req.body;

    try {
        var retorno = await database.Funcionario.create(funcionario);
    } catch (error) {
        return res.status(412).send({Mensagem: error});
    }

    res.send({Funcionario: retorno});
});

router.post('/areasemcomum', async function(req, res) {
    var areasemcomum = database.AreasEmComum;
    areasemcomum = req.body;

    try {
        var retorno = await database.AreasEmComum.create(areasemcomum);
    } catch (error) {
        res.status(412).send({mensagem: error});
    }

    res.send({AreasEmComum: retorno});
});

module.exports = app => app.use('/condominio', router);
