module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Condomino", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpfcond: {
            type: DataTypes.STRING,
        },
        nmcond: {
            type: DataTypes.STRING
        },
        sbnmcond: {
            type: DataTypes.STRING
        },
        rgcond: {
            type: DataTypes.STRING
        },
        senhacond: {
            type: DataTypes.STRING
        },
    });
};