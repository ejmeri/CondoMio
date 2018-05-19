module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Servico", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nmServico: {
            type: DataTypes.STRING,
			allowNull: false
        },
        rgServico: {
            type: DataTypes.STRING
        },
        nmEmpresa: {
            type: DataTypes.STRING
        },
        apartamento_id : { type: DataTypes.INTEGER}
    });
};