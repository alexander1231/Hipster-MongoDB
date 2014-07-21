var models = require('./mongoose'),
	Schema = models.Schema;

var modelSchema = Schema({
	name : String
})

var Model = models.model('models', modelSchema)

module.exports = Model