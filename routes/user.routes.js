const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Ruta para crear un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await User.create({ username, email, password, role });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
