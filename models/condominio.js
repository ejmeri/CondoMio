module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Condominio", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nmcondominio: {
            type: DataTypes.STRING,
			allowNull: false
        }
    });
};