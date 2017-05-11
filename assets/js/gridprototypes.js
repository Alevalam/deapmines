 var playerArray;
var width1;
var tiles = [];
var canvas1;
var height1;
var gameOver = new Boolean(false);

function Grid(canvas, array, height, width, player){

  // Initialize the variables for a canvas
  canvas1 = canvas;
  height1 = height;
  width1 = width;
  playerArray = array;
  this.player = player;


  // For loops to draw the tiles
  var id = 0;
  for(i = 0; i < height; i+=1){
    for (j = 0; j < width1; j+=1){

      // Create a tile and pass in the array with all the colors
      tiles.push(new Tile(canvas.getContext("2d"), j, i, id, 0));
      id++;
    }
  }
  this.tiles = tiles;

  this.isGameOver = function(e){

    console.log(playerArray.toString());

    for (i=0; i<height1; i++){
      var rowSum = 0;
      var rowPoint = i*width1;
      for (j=0; j<width1; j++){
        rowSum += playerArray[rowPoint];
        rowPoint++;
      }
      console.log(i + " row Sum: " + rowSum);
      console.log("width1: " + width1);

      if(rowSum == width1 || rowSum == -width1){
        gameOver = true;
      }
    }

    for (m=0; m<width1; m++){
      var colSum = 0;
      var colPoint = m;
      for (n=0; n<height1; n++){
        colSum += playerArray[colPoint];
        colPoint+= width1;
      }
      console.log(m + " col Sum: " + colSum);
      console.log("height1: " + height1);

      if(colSum == height1 || colSum == -height1){
        gameOver = true;
      }
    }

    if(gameOver == true){
      alert("GAME OVER");
    }
  }


  this.onclick = function(e) {

      if(gameOver == false){
        var mouseX, mouseY;

        //Locate the tile containing the click
        if(e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if(e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }

        // Obtain the 2D Index for the array
        var x = Math.floor((mouseX/canvas1.width) * width1);
        var y = Math.floor((mouseY/canvas1.height) * height1);

        //this.array[x+y*(this.width)] = player;
        ;

        io.socket.post('/board/clicked',{"x":x, "y":y, "player":this.player}, function(resData){
        });

        this.isGameOver();
      } else {
        alert("START A NEW GAME");
      }

      }.bind(this)

    // Method to redraw the board if there's a click (might not be important)
    this.draw = function(){
        for(tile of this.tiles){
          var x = (canvas1.width/width1) * tile.xpos;
          var y  = (canvas1.height/height1) * tile.ypos;
          tile.draw(x, y);
        }
      }
}

function redraw(x,y,player){
  id = x+y*(width1);
  playerArray[id] = player;
  //alert(JSON.stringify(playerArray));
  var xpos = (canvas1.width/width1) * x;
  var ypos  = (canvas1.height/height1) * y;
  tiles[id].draw(xpos,ypos);
}

function Tile(context, xpos, ypos, id, neighbors){

  // Initialize the variables for a tile
  this.context = context;
  this.xpos = xpos;
  this.ypos = ypos;
  this.tileID = id;
  this.neighbors = neighbors;
  var color;

  this.draw = function(x, y){

    this.context.beginPath();

    // Choose the color of the tile based on the correspinding team in the array
    if(playerArray[id]==0){
      color = "#20B2AA";
    }
    else if(playerArray[id]==1){
      color = "#FF0000";
    }
    else if(playerArray[id]==-1){
      color = "#00FFFF";
    }

    // Draw the tiles onto the canvas
    this.context.fillStyle=color;
    this.context.fillRect(x, y, 30, 30);
    this.context.rect(x,y,30,30);
    this.context.strokeStyle = '#ffff00';
    this.context.stroke();

  }
  return this.tileID;
}

function IsGameOver(){
  for(i = 0; i < height; i+=1){
    if (Tile.color == "#000000");
  }
}
