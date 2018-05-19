module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Funcionario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nmfunc: {
            type: DataTypes.STRING,
        },
        tipofuncionario: {
            type: DataTypes.STRING
        },
        condominio_id : { type: DataTypes.INTEGER }
    });
};