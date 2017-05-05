function joinGame(){

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
    var team;
    
    io.socket.get('/team', function (resData) {
        team1 = resData[0];
        team2 = resData[1];
        if(team1.count>team2.count){
            team = team2.number;
            io.socket.post('/team/updated',{"team":team}, function(resData){
        }); 
        }else{
            team = team1.number;
            io.socket.post('/team/updated',{"team":team}, function(resData){
        });    
        }
    alert(team1.count);
    var height = 10;
    var width = 10;
    var gameboard = new Grid(canvas, array, height,width,team);
    canvas.onclick = gameboard.onclick;
    gameboard.draw();
    var holder = document.getElementById("boardHolder");
    holder.appendChild(canvas);
    });
  });
}

