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

  //  Customer.associate = function(models) {

  //   // Customer will be associated with a request
  //   Customer.hasMany(models.Request, {
  //   });
  // };
  return Customer;
};