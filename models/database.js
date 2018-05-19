const base = require("../database/mysql");


if (!global.hasOwnProperty('db')) {
	var Sequelize = require('sequelize'),
		sequelize = null

	// the application is executed on the local machine ... use mysql
	sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, mysql.params);


	global.db = {
		// Example: sequelize.import(__dirname + '/example'),
		// add your other models here
	}

	/*
	  Associations can be defined here. E.g. like this:
	  global.db.User.hasMany(global.db.SomethingElse)
	*/

	//global.db.Example1.hasMany(global.db.Example)

	// JOINERS
	//global.db.Example.belongsTo(global.db.Example1);

}

module.exports = global.db;