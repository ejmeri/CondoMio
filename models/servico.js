module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Servico", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nmservico: {
            type: DataTypes.STRING,
			allowNull: false
        },
        rgservico: {
            type: DataTypes.STRING
        },
        nmempresa: {
            type: DataTypes.STRING
        },
        apartamento_id : { type: DataTypes.INTEGER}
    });
};