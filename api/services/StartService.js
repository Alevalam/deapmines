module.exports = {
startThings: function(size){
  
  var array = new Array();
  var i = 0
  for(i = 0; i < 100; i++){
    array[i] = 1;
  }
  BoardArray.create({
  	tile: array
  })
	}
}