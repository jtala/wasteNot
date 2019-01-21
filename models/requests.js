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
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        is_complete: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        timestamps: false
    }
    );
    
    return Request;
};

/* is_complete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        } */