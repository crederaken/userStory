/*
This is the schema for the story table in MongoDB
The trick here is it pulls the Id of the User from 
the User table which is something I need to figure out.
*/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var StorySchema = new Schema({

	creator: { type: Schema.Types.ObjectId, ref: 'User' },
	content: String,
	created: { type: Date, defauly: Date.now}

});

module.exports = mongoose.model('Story', StorySchema);