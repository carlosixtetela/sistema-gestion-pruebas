const express = require('express');
const router = express.Router();
const Project = require('../models/project.model');
const verifyToken = require('../middlewares/auth.middleware');

// Ruta para crear un nuevo proyecto (solo usuarios autenticados)
router.post('/create', verifyToken, async (req, res) => {
  try {
    const { name, description, startDate, endDate, status } = req.body;
    const project = await Project.create({ name, description, startDate, endDate, status });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
