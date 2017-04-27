/**
 * LogController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	logEvent: function(req, res){
		Log.find({width: 10}).exec(function(err, logevent){
			if(err){
				return res.send(err);
			}
			sails.log('LOG EVENT TESTING: ', logevent);
		})
		return res.json(logevent);
	}

};
