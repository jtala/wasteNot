module.exports = function (sequelize, DataTypes) {
    var Request = sequelize.define("Request", {
        customer: {
            type: DataTypes.STRING,
        },
        driver: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        }
    });
    // Working on getting customer Id into this table.
    /* Request.associate = function(models) {
        // We're saying that a Request should be associated with a customer.
        // A Request can't be created without an customer because of the Foreign Key restraint.
        Request.belongsTo(models.Customer, {
          foreignKey: {
            allowNull: false
          }
        });
      }; */
    return Request;
};