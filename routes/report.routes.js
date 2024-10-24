const express = require('express');
const router = express.Router();
const { generateReport } = require('../controllers/report.controller');
const verifyToken = require('../middlewares/auth.middleware');

// Ruta protegida para generar el informe
router.get('/generate', verifyToken, generateReport);

module.exports = router;
