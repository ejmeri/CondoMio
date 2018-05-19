module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Contrato", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpfcond: {
            type: DataTypes.STRING
        },
        condomino_id : {type: DataTypes.INTEGER },
        apartamento_id: { type: DataTypes.INTEGER }
    });
};