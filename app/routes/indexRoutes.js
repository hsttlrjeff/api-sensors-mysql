var models = require('../models');
var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res){
        res.json({ message: 'hooray! welcome to our api! The route is separate' });
    });

module.exports = router;