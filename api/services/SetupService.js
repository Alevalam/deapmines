module.exports = {
  setupBoard: function(req, res){

    Board.create({tile:"0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0"}).exec(function(err, board) {

    if (err) {return res.serverError(err);}
});

  },

  setupLog: function(req, res){
    Log.create({boardstate: "TESTING", timestamp: "13"}).exec(function(err, log) {
    if (err) {return res.serverError(err);}
    });
  }
};
