module.exports = function(mongoose) {
  var exportItems = {};
  var Schema = mongoose.Schema;
  var schema = new Schema(
    {
      categoryName: String,
      categoryId: Number,
      create: { type: Date, default: Date.now() },
      update: { type: Date, default: Date.now() },
      createdBy: Number,
      updatedBy: Number
    },
    { collection: "Category" }
  );

  var Model = mongoose.model("Category", DepartmentSchema);

  exportItems.getAll = function getAll(argFilter, callback) {
    var list = [];
    Model.find({}, function(eror, data) {
      data.forEach(function(d) {
        list.push(d);
      });
      callback(list);
    });
  };
  exportItems.save = function save(collection, callback) {
    exportItems.getAll({}, function(_list) {
      var list = [];
      _list.forEach(function(d) {
        list.push(d);
      });
      var maxID = Math.max.apply(
        Math,
        list.map(function(o) {
          return o.categoryId;
        })
      );
      collection.categoryId = maxID + 1;
      var model = new Model({
        categoryName: collection.deptName,
        categoryId: collection.deptID
      });
      model.save(function(error) {
        if (error == null) console.log("added successfully");
        else console.log(error);
        callback(error, collection);
      });
    });
  };
  exportItems.deleteById = function deleteById(collection, callback) {
    model.deleteOne({ categoryId: collection.categoryId }, function(error) {
      if (error == null)
        console.log("deleted successfully Id: " + collection.categoryId);
      else console.log(error);
      callback(error, collection);
    });
  };
  return exportItems;
};
