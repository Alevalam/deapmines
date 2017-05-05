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



  // Updating the tile array in the database to represent a player click
  setTeam: function(self, x, y, player){

    // Update a record in the array for the clicked square
    self.tile[x+y * self.width] = player;
    Board.update({boardNum: self.boardNum}, {tile:self.tile}).exec(function afterwards(err, updated){

      if (err) {
        // handle error here- e.g. `res.serverError(err);`
        sails.log("ERROR UPDATING");
        return;
      }
    });
  }
};
