module.exports = {
  setupBoard: function(req, res){

    Board.create({tile:"0,0,1,0,1,0,1,1,1"}).exec(function(err, board) {

    if (err) {return res.serverError(err);}
});

  }
};
