const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Test = require('./test.model');

const Defect = sequelize.define('Defect', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  severity: {
    type: DataTypes.ENUM('low', 'medium', 'high', 'critical'),
    defaultValue: 'low',
  },
  status: {
    type: DataTypes.ENUM('open', 'in-progress', 'resolved'),
    defaultValue: 'open',
  }
});

// Relación: Una prueba tiene muchos defectos
Test.hasMany(Defect);
Defect.belongsTo(Test);

module.exports = Defect;
