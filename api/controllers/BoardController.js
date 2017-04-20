/**
 * BoardController
 *
 * @description :: Server-side logic for managing boards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  hi: function(req, res){
    return res.send('Hi There');
  },

  clicked: function(req, res){
    var x = req.body.x;
    var y = req.body.y;
    var team = req.body.team;


    Log.create({"type": "cell", "payload":{"x": x, "y": y, "team": team}})
    .then(function(value){sails.log("Created New Log Item");});

    var board = SetupService.currentBoard();
    Board.setTeam(board, x, y, team);

  },




};
