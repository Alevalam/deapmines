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

  // Function defining what happens on a board click
  clicked: function(req, res){
    var x = req.body.x;
    var y = req.body.y;
    var player = req.body.player;

    // Create a log event for the new change in the board
    Log.create({"type": "cell", "payload":{"x": x, "y": y, "player": player}})
    .then(function(value){sails.log("Created New Log Item");
        Log.publishCreate(value);});

    // Upating the record of the board in the database
    var board = SetupService.currentBoard();
    board.then(function(b){
      //sails.log("PRINTING: ", b);
      Board.setTeam(b, x, y, player);
    });
  },

};
