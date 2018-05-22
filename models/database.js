const base = require("../database/postgres");


if (!global.hasOwnProperty('db')) {
	var Sequelize = require('sequelize'),
		sequelize = null

	sequelize = new Sequelize(base.database, base.username, base.password, base.params);


	global.db = {
		Sequelize: Sequelize,
		sequelize: sequelize,
		Condominio: sequelize.import(__dirname + '/condominio'),
		Apartamento: sequelize.import(__dirname + '/apartamento'),
		Servico: sequelize.import(__dirname + '/servico'),
		Condomino: sequelize.import(__dirname + '/condomino'),
		Contrato: sequelize.import(__dirname + '/contrato'),
		Encomenda: sequelize.import(__dirname + '/encomenda'),
		Encomenda_Status: sequelize.import(__dirname + '/encomenda_status'),
		AreasEmComum: sequelize.import(__dirname + '/areasemcomum'),
		Reserva: sequelize.import(__dirname + '/reserva'),
		Visitante_Status: sequelize.import(__dirname + '/visitante_status'),
		Visitante: sequelize.import(__dirname + '/visitante'),
		Visitante_Condomino: sequelize.import(__dirname + '/visitante_condomino'),
		Funcionario: sequelize.import(__dirname + '/funcionario'),
		// Example: sequelize.import(__dirname + '/example'),
		// add your other models here
	}

	/*
	  Associations can be defined here. E.g. like this:
	  global.db.User.hasMany(global.db.SomethingElse)
	*/

	global.db.Condominio.hasMany(global.db.Apartamento);
	global.db.Apartamento.hasMany(global.db.Servico);
	global.db.Apartamento.hasMany(global.db.Contrato);
	global.db.Condomino.hasMany(global.db.Contrato);
	global.db.Encomenda_Status.hasMany(global.db.Encomenda);
	global.db.Condominio.hasMany(global.db.AreasEmComum);
	global.db.Condomino.hasMany(global.db.Reserva);
	global.db.AreasEmComum.hasMany(global.db.Reserva);
	global.db.Visitante_Status.hasMany(global.db.Visitante);
	global.db.Visitante.hasMany(global.db.Visitante_Condomino);
	global.db.Condomino.hasMany(global.db.Visitante_Condomino);
	global.db.Condominio.hasMany(global.db.Funcionario);
	//global.db.Example1.hasMany(global.db.Example)

	// JOINERS
	//global.db.Example.belongsTo(global.db.Example1);

}

module.exports = global.db;