const express = require('express');
const { getUserById } = require('../controller/userController'); // Import controller

const router = express.Router();

// ✅ GET /users/:id - Fetch user by ID with age > 21
router.get('/:id', getUserById);

module.exports = router;
