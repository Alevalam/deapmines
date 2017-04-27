function Grid(canvas, array, height, width, player){

  // Initialize the variables for a canvas
  this.canvas = canvas;
  this.height = height;
  this.width = width;
  this.array = array;
  this.player = player;


  // For loops to draw the tiles
  var tiles = [];
  var id = 0;
  for(i = 0; i < height; i+=1){
    for (j = 0; j < width; j+=1){

      // Create a tile and pass in the array with all the colors
      tiles.push(new Tile(canvas.getContext("2d"), array, j, i, id, 0));
      id++;
    }
  }
  this.tiles = tiles;

  // Listen to the log for a change and draw as necessary
  io.socket.on('/log', function(event){
    alert("just checking stuff");
    switch (event.verb) {
      case 'clicked':
       alert("this shit os was");
       break;
    }
    

      if(event.type=='board'){
        //ToDo
      }

      // Redraw one cell if that cell has been changed
      else if(event.type=='cell'){
        var x = event.payload.x;
        var y = event.payload.y;
        var player = event.payload.player;
        this.array[x+y*(this.width)] = player;
        
      }

      this.draw();
  })

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
        var x = Math.floor((mouseX/this.canvas.width) * this.width);
        var y = Math.floor((mouseY/this.canvas.height) * this.height);

        //this.array[x+y*(this.width)] = player;
        ;
        
        io.socket.post('/board/clicked',{"x":x, "y":y, "player":this.player}, function(resData){
        });

      }.bind(this)

    // Method to redraw the board if there's a click (might not be important)
    this.draw = function(){
        for(tile of this.tiles){
          var x = (this.canvas.width/this.width) * tile.xpos;
          var y  = (this.canvas.height/this.height) * tile.ypos;
          tile.draw(x, y);
        }
      }
}

function Tile(context, array, xpos, ypos, id, neighbors){

  // Initialize the variables for a tile
  this.context = context;
  this.array = array;
  this.xpos = xpos;
  this.ypos = ypos;
  this.tileID = id;
  this.neighbors = neighbors;
  var color;

  this.draw = function(x, y){

    this.context.beginPath();

    // Choose the color of the tile based on the correspinding team in the array
    if(this.array[id]==0){
      color = "#20B2AA";
    }
    else if(this.array[id]==1){
      color = "#00FF00";
    }
    else if(this.array[id]==2){
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
