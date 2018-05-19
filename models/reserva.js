module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Reserva", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        desc: { type: DataTypes.STRING },
        date: { type: DataTypes.DATE },
        cpfcond : { type: DataTypes.STRING },
        areasemcomum_id : { type: DataTypes.INTEGER},
        condomino_id : { type: DataTypes.INTEGER }
    });
};