const Client = require('../models/client-info.js');

module.exports = function (app) {

  /* GET ALL CLIENTS */
  app.get('/api/client', function (req, res, next) {
    Client.find(function (err, results) {
      if (err) return next(err);
      res.json(results);
    });
  });

  /* GET SINGLE CLIENT BY ID */
  app.get('/api/client/:id', function (req, res, next) {
    Client.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE CLIENT */
  app.post('/api/client', (req, res) => {
    Client.create(req.body).then(function (result) {
      res.json(result);
    });
  });

  /* UPDATE CLIENT */
  app.put('/api/client/:id', function (req, res, next) {
    Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* DELETE CLIENT */
  app.delete('/api/client/:id', function (req, res, next) {
    console.log('delete route hit')
    Client.findByIdAndDelete({_id: req.params.id}, req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch((err) => console.log(err));
  });

}