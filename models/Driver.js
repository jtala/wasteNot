module.exports = function (sequelize, DataTypes) {

    var Driver = sequelize.define("Driver", {
      driver_name: { 
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Driver;
  };