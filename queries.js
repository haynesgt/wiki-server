var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var db = pgp({
  host: 'localhost',
  port: '5432',
  database: 'wiki',
  user: 'wiki_server',
  password: 'password'
});

var queryFactory = function(query, message) {
  // query: return [ query, params ]
  return function(req, res, next) {
    var params = query(req);
    console.log(params);
    db.any.apply(null, params)
      .then(function(data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: message
          });
      }).catch(function (err) {
        return next(err);
      });
  }
};

module.exports = {
  getAllPuppies:
    queryFactory(
      function(req) {
        return ['select * from wiki'];
      },
      'GET ALL pages'
    ),
  getSinglePuppy:
    queryFactory(
      function(req) {
        return [
          'select * from page where id = $1',
          parseInt(req.params.id)];
      },
      'GET ONE page'
    ),
  createPuppy:
    function() {
      console.warn('not implemented');
    },
  updatePuppy:
    function() {
      console.warn('not implemented');
    },
  removePuppy:
    function() {
      console.warn('not implemented');
    }
};
