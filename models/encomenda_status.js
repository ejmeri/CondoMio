module.exports = function (sequelize, DataTypes) {
    return sequelize.define("encomenda_status", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status_nome: {
            type: DataTypes.STRING
        }
    });
};