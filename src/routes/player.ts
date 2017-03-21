import express = require('express');
import { playerModel, recordModel } from '../models';
var router = express.Router();


/**
 * 注册用户
 */
router.post('/', async (req, res, next) => {
    var data = req.body;

    var newPlayer = await new playerModel(req.body).save();
    var currentRecord = await new recordModel({ playerId: newPlayer._id }).save();
    await newPlayer.update({ currentRecord: currentRecord._id }).exec();

    res.json({
        issuccess: true,
        data: newPlayer
    });

})

/* GET home page. */
router.get('/isExisit', async function (req, res, next) {
    var phone = req.query.phone;
    var num = await playerModel.count({ phone }).exec();
    res.json({
        issuccess: true,
        data: num ? true : false
    });

});


module.exports = router;
