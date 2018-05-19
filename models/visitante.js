module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Visitante", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nmvisitante: {
            type: DataTypes.STRING
        },
        visitante_status: { type : DataTypes.INTEGER }
    });
};