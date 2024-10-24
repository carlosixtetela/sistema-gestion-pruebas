const express = require('express');
const router = express.Router();
const Defect = require('../models/defect.model');
const verifyToken = require('../middlewares/auth.middleware');

// Ruta para registrar un nuevo defecto
router.post('/create', verifyToken, async (req, res) => {
  try {
    const { title, description, severity, testId } = req.body;
    const defect = await Defect.create({ title, description, severity, TestId: testId });
    res.json(defect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
