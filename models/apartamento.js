module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Apartamento", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descapto: {
            type: DataTypes.STRING,
			allowNull: false
        },
        compapto: {
            type: DataTypes.STRING,
			allowNull: false
        },
        condominio_id : { type: DataTypes.INTEGER}
    });
};