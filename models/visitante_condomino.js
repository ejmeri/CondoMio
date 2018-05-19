module.exports = function (sequelize, DataTypes) {
    return sequelize.define("visitante_condomino", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpfcond: {type: DataTypes.STRING},
        cpfvisitante: {type: DataTypes.STRING},
        condomino_id: {type: DataTypes.INTEGER},
        visitante_id: {type: DataTypes.INTEGER},
    });
};