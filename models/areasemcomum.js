module.exports = function (sequelize, DataTypes) {
    return sequelize.define("areasemcomum", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nmareasemcomum: {
            type: DataTypes.STRING,
			allowNull: false
        },
        condominio_id : { type: DataTypes.INTEGER}
    });
};