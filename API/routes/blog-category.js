var route = function(app, mongoose) {
  var db = require("./DBModels/blog-category.model")(mongoose);
  app.get("/api/categories", function(req, res) {
    var argumentFilter = {};
    db.getAll(argumentFilter, function(collections) {
      res.send(collections);
    });
  });
  app.post("/api/addcategory", function(req, res) {
    db.save(req.body, function(error, data) {
      if (error) res.send(error);
      else res.send(data);
    });
  });
  app.post("/api/deletecategory", function(req, res) {
    db.deleteById(req.body, function(error, data) {
      if (error) res.send(error);
      else res.send(data);
    });
  });
};
module.exports = route;
