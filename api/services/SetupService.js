module.exports = {
  setupBoard: function(){

    Board.create({
      tile:[
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,1,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,2,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0],
      width: 10,
      height: 10})
    .then(function(value){


    });
  },

  currentBoard: function(){
    return Board.findOne({width: 10});
  }
  // setupLog: function(req, res){
  //   Log.create({boardstate: "TESTING", timestamp: "13"}).exec(function(err, log) {
  //   if (err) {return res.serverError(err);}
  //   });
  // }
};
