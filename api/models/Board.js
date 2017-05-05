/**
 * Board.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tile: {
      type: 'json'
    },
    width:{
      type: 'integer'
    },
    height:{
      type:'integer'
    },
    boardNum:{
      type: 'integer'
    }

  },




  setTeam: function(self, x, y, player){
    //var temp = self;
    sails.log("IN SETTEAM: ");
    self.tile[x+y * self.width] = player;
    Board.update({boardNum: self.boardNum}, {tile:self.tile}).exec(function afterwards(err, updated){

      if (err) {
        // handle error here- e.g. `res.serverError(err);`
        sails.log("ERROR UPDATING");
        return;
      }
      ///sails.log("SELF", self.tile);
      sails.log("UPDATED", updated);
      // var board = Board.currentBoard();
      // board.then(function(b){
      //   sails.log("B: ", b);
      // });
      //sails.log('Updated board to have width ' + updated[0].width);
    });
  }
};
