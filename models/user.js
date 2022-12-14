const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull:false,
        }
    },
    {
        hooks: {

        },
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: `user`,
    }
);

module.exports = User;