module.exports = {
  setupBoard: function(){

    Board.create({
      tile:[
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,],
      width: 10,
      height: 10,
      boardNum: 1})
    .then(function(value){


    });
  },

  currentBoard: function(){
    return Board.findOne({boardNum: 1});
  },


  setupTeams: function(){
    team1 = Team.create({
      number: 1,
      count: 0})
    .then(function(value){

    });
    
    team2 = Team.create({
      number: -1,
      count: 0})
    .then(function(value){

    });
  }

  // setupLog: function(req, res){
  //   Log.create({boardstate: "TESTING", timestamp: "13"}).exec(function(err, log) {
  //   if (err) {return res.serverError(err);}
  //   });
  // }
};
