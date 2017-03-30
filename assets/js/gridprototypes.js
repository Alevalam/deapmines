function Grid(canvas, array, height, width){
  this.canvas = canvas;
  this.height = height;
  this.width = width;
  //this.color = color;
  this.array = array;

  var tiles = [];
  var count = 0;
  for(i = 0; i < height; i+=1){
    for (j = 0; j < width; j+=1){
      if(array[i + (j * width)] == 1){
        //color = "#20B2AA";
        flipColor = "#FF0000"
      }else{
        //color = "#228B22";
        flipColor = "#000000"
      }
      color = "#20B2AA";
      tiles.push(new Tile(canvas.getContext("2d"), color, flipColor, j, i, count, count, 0));
      count++;
    }
  }
  this.tiles = tiles;

  this.onclick = function(e) {
        var mouseX, mouseY;

        if(e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if(e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }
        var x = Math.floor((mouseX/this.canvas.width) * this.width);
        var y = Math.floor((mouseY/this.canvas.height) * this.height);

        // var c = context.(x, y, 1, 1).data;
        for(tile of this.tiles){
          if(tile.xpos == x && tile.ypos == y){
            tile.flip(tile.flipColor);
          }
        }
        this.draw();
      }.bind(this)

    this.draw = function(){
        for(tile of this.tiles){
          var x = (this.canvas.width/this.width) * tile.xpos;
          var y  = (this.canvas.height/this.height) * tile.ypos;
          tile.draw(x, y);
        }
      }
}

function Tile(context, color,flipColor, xpos, ypos, id, value, neighbors){
  this.context = context;
  this.color = color;
  this.flipColor = flipColor;
  this.xpos = xpos;
  this.ypos = ypos;
  this.tileID = id;
  this.isBomb = false;
  this.value = value;
  this.free = false;
  this.clicked = false;
  this.neighbors = neighbors;

  this.draw = function(x, y){
    this.context.beginPath();
    this.context.fillStyle=this.color;
    this.context.fillRect(x, y, 30, 30);
    this.context.rect(x,y,30,30);
    this.context.strokeStyle = '#ffff00';
    this.context.stroke();

  }

  this.flip = function(color){
    this.color = color;
  }

  return this.tileID;
}

// function drawtile(contxt, xpos, ypos){
//   contxt.beginPath();
//   this.square = contxt.fillRect(xpos,ypos,SIZE,SIZE);
//   return this.square;
// }
