var mongo = require('mongoose');

var schema = mongo.Schema;

var dataSchema = new schema({
    user : String,
    time : String,
	date : String,
    result : Boolean
});

var dataModel = mongo.model("data", dataSchema);

module.exports = dataModel;