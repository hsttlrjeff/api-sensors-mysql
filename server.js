var config = require('./app/config/config');
var express = require('express');
//var path = require('path');
var db = require('./app/models');
var bodyParser = require('body-parser');

var indexRoutes = require('./app/routes/indexRoutes');
var locationRoutes = require('./app/routes/locationRoutes');
var temperatureRoutes = require('./app/routes/tempRoutes');
var sensorTypeRoutes = require('./app/routes/sensorRoutes');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.set('port', config.port);
//app.set('connectionString', config.connectionString);
//app.set('allowOrigin', config.allowOrigin);

var router = express.Router();
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowOrigin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//Locations.create({location_name: 'Master Bedroom', is_enabled: 1});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
/*router.route('/bears/:bear_id')

    // update the bear with this id
    .put(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })

    // delete the bear with this id
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });*/


app.use('/api', indexRoutes);
app.use('/api', locationRoutes);
app.use('/api', temperatureRoutes);
app.use('/api', sensorTypeRoutes);

db.sequelize.sync().then(function () {
  var server = app.listen(config.port, function() {
    console.log('API listening on port ' + config.port);
  });
});
