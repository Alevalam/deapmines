var playerArray;
var width1;
var tiles = [];
var canvas1;
var height1;

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

  this.onclick = function(e) {
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
      color = "#00FF00";
    }
    else if(playerArray[id]==2){
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

