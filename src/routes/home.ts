import express = require('express');
import { playerModel, recordModel } from '../models';
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    var _id = req.query._id;
    if (_id) {
        var player = await playerModel.findOne().populate('currentRecord').exec();
        var toPlayer;
        if (player.currentRecord.toPlayer) {
            toPlayer = await playerModel.find({ _id: player.currentRecord.toPlayer });
        }
        res.render('home', {
            player: player,
            toPlayer: toPlayer
        });
    } else {
        res.json({
            issuccess: false,
            data: '参数不非法'
        })

    }
    // res.render('home');
});

module.exports = router;
