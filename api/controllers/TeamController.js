/**
 * TeamController
 *
 * @description :: Server-side logic for managing logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  updated: function(req, res){
  	var id = req.team;
  	var team = Team.findOne({number: id});
  	team.then(function(){
         Team.updateCount();
    });
  },

};
