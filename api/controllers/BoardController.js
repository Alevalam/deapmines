/**
 * BoardController
 *
 * @description :: Server-side logic for managing boards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

<<<<<<< HEAD
var clicked = 0;
=======
>>>>>>> 6b6d2047fcb55196a94e8fbc1faee32cc7e9ff21
module.exports = {

  hi: function(req, res){
    return res.send('Hi There');
  },

  clicked: function(req, res){
<<<<<<< HEAD
    clicked++;
    return  res.send("Clicked: " + clicked);
  },


=======
    var x = req.body.x;
    var y = req.body.y;
    var team = req.body.team;


    Log.create({"type": "cell", "payload":{"x": x, "y": y, "team": team}})
    .then(function(value){sails.log("Created New Log Item");});

    var board = SetupService.currentBoard();
    Board.setTeam(board, x, y, team);

  },




>>>>>>> 6b6d2047fcb55196a94e8fbc1faee32cc7e9ff21
};
