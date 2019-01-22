module.exports = function (sequelize, DataTypes) {
    
    var Request = sequelize.define("Request", {
        customer: {
            type: DataTypes.STRING,
        }, 
        driver: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            /* allowNull: false */
        },
        item: {
            type: DataTypes.STRING,
            /* allowNull: false */
        },
        weight: {
            type: DataTypes.STRING,
            /* allowNull: false */
        },
        status: {
            type: DataTypes.BOOLEAN,
            /* allowNull: false */
            defaultValue: 0
        },
        is_complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    },
    {
        timestamps: false
    }
);

// Request.associate = function(models) {
//     // Request must belong to a Customer
//     Request.belongsTo(models.Customer, {
//         foreignKey: {
//             allowNull: true
//           }
//     });
//   }; 

    return Request;
};