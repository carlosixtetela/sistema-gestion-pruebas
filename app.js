// Importar módulos
const express = require('express');
const sequelize = require('./config/db.config');

// Importar modelos
const User = require('./models/user.model');
const Project = require('./models/project.model');

// Crear aplicación
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Sistema de Gestión de Pruebas funcionando');
});

// Sincronizar la base de datos y luego levantar el servidor
try {
  sequelize.sync({ force: false }).then(() => {
    app.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });
  }).catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
} catch (error) {
  console.error('Error:', error);
}

// Importar rutas
const userRoutes = require('./routes/user.routes');
const projectRoutes = require('./routes/project.routes');
const authRoutes = require('./routes/auth.routes');
const testRoutes = require('./routes/test.routes');
const defectRoutes = require('./routes/defect.routes');
const reportRoutes = require('./routes/report.routes');

// Usar las rutas
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/defects', defectRoutes);
app.use('/api/reports', reportRoutes);