const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', auth, userCtrl.getUser)

module.exports = router;