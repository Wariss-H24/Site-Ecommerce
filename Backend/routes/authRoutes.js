const express = require('express')
const router = express.Router();
const { register,verifyOTP, login } = require('../Controllers/authControllers');

router.post('/register', register);
router.post('/verify', verifyOTP); // 🟢 nouvelle route pour le code
router.post('/login', login);
module.exports = router;

