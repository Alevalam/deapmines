function joinGame(){

  //GET REQUEST TO GET MODEL INFO
  io.socket.get('/board', function (resData) {
    var array = resData[0].tile;
    
    // Setting up the canvas
    var canvas = document.createElement("canvas");
    canvas.id = "CursorLayer";
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.position = "absolute";
    canvas.style.zIndex = 8;
    canvas.style.border = "1ptx solid";
    
    // Obtaining the team for the player
    var team;
    io.socket.get('/team', function (resData) {
        team1 = resData[0];
        team2 = resData[1];
        
        // Assign the player to team 2 if necessary
        if(team1.count>team2.count){
            team = team2.number;
            io.socket.post('/team/updated',{"team":team}, function(resData){
        }); 

        // Assign the player to team 1 if necessary
        }else{
            team = team1.number;
            io.socket.post('/team/updated',{"team":team}, function(resData){
        });    
        }
    
    // Initialsing the game board
    var height = 10;
    var width = 10;
    var gameboard = new Grid(canvas, array, height,width,team);
    
    // Assigning the click on the canvas to our custom click
    canvas.onclick = gameboard.onclick;
    gameboard.draw();
    
    var holder = document.getElementById("boardHolder");
    holder.appendChild(canvas);
    });
  });
}

