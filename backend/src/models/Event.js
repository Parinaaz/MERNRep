var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var EventSchema = new Schema({
  event: {
    type: String
  }

});

mongoose.model('Event', EventSchema);