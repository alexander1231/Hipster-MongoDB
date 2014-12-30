var Model = require('../models/model');

mainController = function (server) {
	
	server.get('/save-to-database', function(req, res){
		
		var model = new Model({
			name : 'hanshavin'
		});

	    model.save(function (err) {
		if (err) return handleError(err);
		res.send('hello frontend!! the data has been saved successfully :)');
		console.log('model saved in the database', model);
	    });
	});
};

module.exports = mainController;
