module.exports = {
startThings: function(){
  
  // var array = new Array();
  // var i = 0
  // for(i = 0; i < 100; i++){
  //   array[i] = 1;
  // }

	BoardArray.create({
  	tile: "0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0"
  }).exec(function (err, BoardArray) {
    if (err) {

      return res.serverError(err);
    }
    
  });

  BoardArray.create({
  	tile: "0,0,0,1,1,1,0,7,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0"
  }).exec(function (err, BoardArray) {
    if (err) {

      return res.serverError(err);
    }
    
  });  
  }
}