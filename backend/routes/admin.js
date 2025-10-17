const express = require('express');
const router = express.Router();
const { createAdmin, loginAdmin } = require('../controllers/adminController');

// Routes
router.post('/register', createAdmin);  // One-time use to create admin
router.post('/login', loginAdmin);

module.exports = router;
