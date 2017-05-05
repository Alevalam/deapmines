/**
 * Team.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
   autoSubscribe: true,
   attributes: {

     number: {
       type: 'integer'

     },
     count: {
       type: 'integer'
     }
	},

  // Increasing the count value of a team to reflect one added player
	updateCount: function(self){
   self.count = self.count+1;
   Team.update({number: self.number}, {count: self.count}).exec(function afterwards(err, updated){

      if (err) {
        // handle error here- e.g. `res.serverError(err);`
        sails.log("ERROR UPDATING");
        return;
      }
    });
   }
 };
