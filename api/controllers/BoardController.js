/**
 * BoardController
 *
 * @description :: Server-side logic for managing boards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var clicked = 0;
module.exports = {

  clicked: function(req, res){
    clicked++;
    return  res.send("Clicked: " + clicked);
  }




};