/**
 * TeamController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  // Method to increase the size of a team when a player joins
  updated: function(req, res){

  	// Finding the team to increase
  	var id = req.body.team;
  	var team = Team.findOne({number: id});

  	// Calling the function in the team model to make the increase
  	team.then(function(b){
        Team.updateCount(b);
    });
  },

};
