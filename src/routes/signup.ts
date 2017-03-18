import express = require('express');
import { playerModel } from '../models';

var router = express.Router();


router.post('/', (req, res, next) => {

    res.redirect('/home');
    next();
});

module.exports = router;