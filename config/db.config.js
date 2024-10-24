const Sequelize = require('sequelize');

// Configuración de conexión a MySQL
const sequelize = new Sequelize('sistema_gestion_pruebas', 'pruebas_user', 'Cidl2024_..', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
