'use strict';
const { Model } = require('sequelize');
const Student = require('./student');
const Subject = require('./subject');

module.exports = (sequelize, DataTypes) => {
  class StudentSubjects extends Model {
    static associate (models) {}
  }
  StudentSubjects.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: Student,
          key: 'id',
        },
        allowNull: false,
      },
      subjectId: {
        type: DataTypes.INTEGER,
        references: {
          model: Subject,
          key: 'id',
        },
        allowNull: false,
      },
      mark: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 100 },
      },
    },
    {
      sequelize,
      modelName: 'StudentSubjects',
    }
  );
  return StudentSubjects;
};
