const express = require('express');
const { register, login, makeAdmin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/make-admin', makeAdmin); // Nueva ruta para hacer un admin

module.exports = router;
