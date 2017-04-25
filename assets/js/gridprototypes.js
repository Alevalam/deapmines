function Grid(canvas, array, height, width, player){
  this.canvas = canvas;
  this.height = height;
  this.width = width;
  //this.color = color;
  this.array = array;
  this.player = player;

  var tiles = [];
  var count = 0;
  for(i = 0; i < height; i+=1){
    for (j = 0; j < width; j+=1){
      color = "#20B2AA";
      tiles.push(new Tile(canvas.getContext("2d"), color, j, i, count, 0));
      count++;
    }
  }
  this.tiles = tiles;


  io.socket.on('/log', function(event){
      if(event.type=='board'){
        //ToDo
      }
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

        this.draw();


        io.socket.post('/board/clicked',{"x":0, "y":0, "player":this.player}, function(resData){
          alert(JSON.stringify(resData));
        });

      }.bind(this)

    this.draw = function(){
        for(tile of this.tiles){
          var x = (this.canvas.width/this.width) * tile.xpos;
          var y  = (this.canvas.height/this.height) * tile.ypos;
          tile.draw(x, y);
        }
      }
}

function Tile(context, color, xpos, ypos, id, neighbors){
  this.context = context;
  this.color = color;
  this.xpos = xpos;
  this.ypos = ypos;
  this.tileID = id;
  this.isBomb = false;
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

function IsGameOver(){
  for(i = 0; i < height; i+=1){
    if (Tile.color == "#000000");
  }
}
