'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Group.hasMany(models.Student);
    }
  }
  Group.init(
    {
      title: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      enteredAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
    },
    {
      sequelize,
      modelName: 'Group',
    }
  );
  return Group;
};
