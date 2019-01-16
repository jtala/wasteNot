module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estimated_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    request_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    drivers_id: {
      type: DataTypes.INTEGER
    }
    
  });

  return Customer;
};