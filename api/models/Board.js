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
    }

  },

  setTeam: function(this, x, y, team){
    this.tile[x+y * this.width] = team;
  }
};
