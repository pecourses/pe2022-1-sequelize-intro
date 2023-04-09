'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Student.belongsTo(models.Group, {
        foreignKey: 'groupId',
      });
    }
  }
  /* Обмеження
PRIMARY KEY
UNIQUE - unique (constraint)
CHECK - validate (validator)
NOT NULL - allowNull (validator + constraint),
FOREIGN KEY

Дефолтне значення
DEFAULT - defaultValue
*/
  // Student.create({})
  // validator -> db (contaraints)
  Student.init(
    {
      firstName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]+(-[A-Z][a-z]+)?$/,
          len: [2, 64],
        },
      },
      lastName: {
        type: DataTypes.STRING(64),
        validate: {
          is: /^[A-Z][a-z]+(-[A-Z][a-z]+)?$/,
          len: [2, 64],
        },
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      isMale: {
        type: DataTypes.BOOLEAN,
      },
      activitiesCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
