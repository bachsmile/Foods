module.exports.middleWare = function(req, res, next) {
    try {
      res.send('req.user');
      next();
    } catch(err) {
      res.status(400);
    }
  }