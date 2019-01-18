module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
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
  return Customer;
};