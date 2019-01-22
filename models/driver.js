module.exports = function (sequelize, DataTypes) {
    var Driver = sequelize.define("Driver", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
    );
    return Driver;
};