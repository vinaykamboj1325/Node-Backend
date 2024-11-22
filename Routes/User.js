const express = require('express');
const ResAdd = require("../Controller/RegisterController");
const LogAdd = require("../Controller/LoginController");
const { jwtAuthMiddleware } = require('../JWTFile/jwt');

const router = express.Router();

router.post('/register', ResAdd.registerAdd); 

router.post('/login',jwtAuthMiddleware , LogAdd.UserAdd) // Corrected typo: expree -> express

module.exports = router;


