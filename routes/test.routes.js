const express = require('express');
const router = express.Router();
const Test = require('../models/test.model');
const verifyToken = require('../middlewares/auth.middleware');

// Ruta protegida para crear una nueva prueba
router.post('/create', verifyToken, async (req, res) => {
  try {
    const { name, description, projectId } = req.body;
    const test = await Test.create({ name, description, ProjectId: projectId });
    res.json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
