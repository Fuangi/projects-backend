const mongoose = require('mongoose');

const designProjectSchema = new mongoose.Schema({
	project: {
		type: String,
		required: [true, 'A project must have a name please!'],
	},
	members: {
		type: [String],
		required: [true, 'A project must have members'],
	},
});

const DesignProject = new mongoose.model('DesignProject', designProjectSchema);

module.exports = DesignProject;
