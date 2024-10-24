const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Project = require('./project.model');

const Test = sequelize.define('Test', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'passed', 'failed'),
    defaultValue: 'pending',
  }
});

// Relación: Un proyecto tiene muchas pruebas
Project.hasMany(Test);
Test.belongsTo(Project);

module.exports = Test;
