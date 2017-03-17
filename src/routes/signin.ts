import express = require('express');
import { userModel } from '../models';
var router = express.Router();


router.get('/', (req, res, next) => {

    res.render('signin');
    next();
}).post('/', async (req, res, next) => {
    var { email, password } = req.body;
    var users = await userModel.find().exec();
    var user = await userModel.findOne({ email, password }).exec();
    console.log('user', user);
    console.log('users', users);

    if (user) {
        req.session.user = user;
        res.render('index', { user: user });
    } else {
        res.render('signin', { errorMsg: '邮箱或密码错误' });
    }

})

module.exports = router;