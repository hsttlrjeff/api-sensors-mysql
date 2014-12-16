var models = require('../models');
var express = require('express');
var router = express.Router();

router.route('/sensors/names')
    .get(function(req, res) {
        db.SensorTypes.findAll({where:{isEnabled:true}}).then(function(locations) {
            res.json(locations);
        },function(err) {
            res.send(err);
        });
    })
    .post(function(req, res) {
        // Do validation and such
        db.SensorTypes.create({sensorTypeName: req.body.sensorTypeName, isEnabled: req.body.isEnabled})
            .then(function() {
                res.json({result: '201'});
            },function(err) {
                res.send(err);
            });
    });

module.exports = router;
