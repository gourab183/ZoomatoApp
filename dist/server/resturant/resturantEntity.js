let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let schema = new mongoose.Schema({
  _id	 :  {type :String, required : true},
  resPhoto : {type :String},
  resName : {type :String, required : true},
  resLoc : {type :String, required : true},
  rating : {type :Number, required : true},
  cuisine : {type :String},
	res : 	{type : String},
  comments : { type : String}
});

let Resturant = mongoose.model('resturant', schema);

module.exports = Resturant;
