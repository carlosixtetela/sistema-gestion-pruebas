const express = require('express');
const sequelize = require('./config/db.config');
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Sistema de Gestión de Pruebas funcionando');
});

// Sincronizar la base de datos y luego levantar el servidor
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
  });
}).catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});
