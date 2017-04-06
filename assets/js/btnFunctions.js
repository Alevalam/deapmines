function newGame(){
  var array = ("0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0").split(",");

  var canvas = document.createElement("canvas");
  canvas.id = "CursorLayer";
  canvas.width = 300;
  canvas.height = 300;
  canvas.style.position = "absolute";
  canvas.style.zIndex = 8;
  canvas.style.border = "1ptx solid";
  //var ctx = canvas.getContext("2d");
  // ctx.fillStyle=color;
  // ctx.fillRect(0,0,canvas.width,canvas.height);
  var height = 10;
  var width = 10;
  //var array = new gridArray(numBombs, (height*width));
//  var test = new gridArray();
  var gameboard = new Grid(canvas, array, height,width);
  canvas.onclick = gameboard.onclick;
  gameboard.draw();
  var holder = document.getElementById("boardHolder");
  holder.appendChild(canvas);

}