function gridArray(bombs, size){
  this.bombs = bombs;
  this.size = size;
  var array = new Array();


  for(int i = 0; i < size; i++){
    array[i] = 1;
  }

  for(int j = 0; j < bombs; j++){
    array[Math.floor(Math.random() * size)] = 0;
  }
  return array;
}
