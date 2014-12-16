var models = require('../models');
var express = require('express');
var router = express.Router();

router.route('/readings/temp')
    .get(function(req, res) {
        db.EnvironmentReadings.findAll({include: [{model:db.HouseLocations},{model:db.SensorTypes}]}).then(function(temps) {
            res.json(temps);
        },function(err) {
            res.send(err);
        });
    })
    .post(function(req, res) {
        // Do validation and such
        db.EnvironmentReadings.create({
            temperatureReading: req.body.temperatureReading,
            humidityReading: req.body.humidityReading,
            houselocationId: req.body.houseLocationId,
            sensortypeId: req.body.sensorTypeId
        }).then(function() {
            res.json({result: '201'});
        },function(err) {
            res.send(err);
        });
    });

router.route('/readings/temp/:locationId')
    .get(function(req, res) {
        db.EnvironmentReadings.findAll({where: {houselocationId: req.params.locationId}, include: [{model:db.HouseLocations},{model:db.SensorTypes}]}).then(function(temps) {
            res.json(temps);
        },function(err) {
            res.send(err);
        });
        console.log(req.params.locationId);
    });

module.exports = router;
