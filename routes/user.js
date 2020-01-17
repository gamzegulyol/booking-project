var express = require('express');
var router = express.Router();
var userModel = require('../model/user');

router.route('/')
    .get(function (req, res, next) {
        userModel.find({})
            .then((data) => {
                console.log(data);
                res.status(200).json({
                    status: 200,
                    message: "Başarılı",
                    data: data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }).post(function (req, res, next) {
        userModel.create(req.body, (err, data) => {
            console.log(data);
            console.log(err);
        })
        res.status(201).json(req.body);
    })
    
module.exports = router;