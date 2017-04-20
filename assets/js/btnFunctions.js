function joinGame(){
  //var boardstring = "0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0";

  //GET REQUEST TO GET MODEL INFO
  io.socket.get('/board', function (resData) {
    var array = resData[0].tile;
    // var array = boardstring.split(",");
    var canvas = document.createElement("canvas");
    canvas.id = "CursorLayer";
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.position = "absolute";
    canvas.style.zIndex = 8;
    canvas.style.border = "1ptx solid";
    var height = 10;
    var width = 10;
    var gameboard = new Grid(canvas, array, height,width);
    canvas.onclick = gameboard.onclick;
    gameboard.draw();
    var holder = document.getElementById("boardHolder");
    holder.appendChild(canvas);
  });

}
