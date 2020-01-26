const express = require('express');
const router = express.Router();
const ScoreBoardItem = require('../models/score');


router.get('/', function (req, res) {
  console.log('get');
  ScoreBoardItem.find({}, (err, scoreBoardItems) => {
    res.json(scoreBoardItems);
  });
});

router.post('/', function (req, res) {
  ScoreBoardItem.create(req.body)
    .then(function(score) {
      res.json(score);
    })
    .catch(function(err) {
      if (err.name == 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json({error: err.message});
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    })

});


module.exports = router;
