import express = require('express');
import { playerModel, recordModel } from '../models';

var router = express.Router();


router.post('/', async (req, res, next) => {
    req.body.age = parseInt(req.body.age);
    var newPlayer = await new playerModel(req.body).save();

    var currentRecord = await new recordModel({ playerId: newPlayer._id }).save();
    newPlayer.currentRecord = currentRecord._id;
    res.locals._id = newPlayer._id;
    // 本地存储用户_id
    res.json({
        issucess: true,
        data: newPlayer._id
    });
    // next();
});

module.exports = router;