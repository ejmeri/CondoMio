module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Encomenda", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descenc: {
            type: DataTypes.STRING
        },
        cpfcond : { type: DataTypes.STRING },
        encomenda_status_id : { type: DataTypes.INTEGER},
        condomino_id : { type: DataTypes.INTEGER }
    });
};