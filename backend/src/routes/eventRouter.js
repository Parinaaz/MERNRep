var express = require('express');
var app = express();
var eventRouter = express.Router();

// Require Item model in our routes module
var Event = require('../models/Event');

// Defined store route
eventRouter.route('/add/post').post(function (req, res) {
  var event = new Event(req.body);
      event.save()
    .then(event => {
    res.json('Event added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
eventRouter.route('/').get(function (req, res) {
  Event.find(function (err, evnts){
    if(err){
      console.log(err);
    }
    else {
      res.json(evnts);
    }
  });
});

// Defined edit route
eventRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Event.findById(id, function (err, event){
      res.json(event);
  });
});

//  Defined update route
eventRouter.route('/update/:id').post(function (req, res) {
  Event.findById(req.params.id, function(err, event) {
    if (!event)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      event.event = req.body.event;

      event.save().then(event => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
eventRouter.route('/delete/:id').get(function (req, res) {
  Event.findByIdAndRemove({_id: req.params.id},
       function(err, event){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = eventRouter;