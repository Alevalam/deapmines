// angular.module('Platzi', []);
// angular.module('Platzi').controller('CanvasCtrl', ['$scope',
// function CanvasCtrl($scope) {
//     var canvas = document.getElementById('canvas');
//     var context = canvas.getContext('2d');
//
//     $scope.data = [
//
//     ];
//
//     $scope.addData = function() {
//         var id = 0;
//         if($scope.data.length > 0) {
//             id = $scope.data[$scope.data.length-1].id + 1;
//         }
//         var p = {id: id, x: $scope.x, y: $scope.y, height: $scope.height, width: $scope.width};
//         $scope.data.push(p);
//         $scope.x = '';
//         $scope.y = '';
//         $scope.height = '';
//         $scope.width = '';
//         draw($scope.data);
//     };
//
//
//     function draw(data) {
//         for(var i=0; i<data.length; i++) {
//             drawSquare(data[i]);
//         }
//     }
//
//     function drawSquare(data) {
//         context.beginPath();
//         context.fillRect(data.x, data.y, data.height, data.width);
//     }
//
//     function isPointInsideRect(pointX,pointY,rectX,rectY,rectWidth,rectHeight){
//     return  (rectX <= pointX) && (rectX + rectWidth >= pointX) &&
//                  (rectY <= pointY) && (rectY + rectHeight >= pointY);
//     }
//
//     // setup
//     canvas.width = 600;
//     canvas.height = 400;
//     context.globalAlpha = 1.0;
//     context.beginPath();
//     draw($scope.data);
// }]);
//
//
//



//COMMENTED ON 3/9/17: Code adds color to the canvas based on hex representation
// angular.module('Platzi', []);
// angular.module('Platzi').controller('BaseCtrl', ['$scope',function ($scope) {
//
//     io.socket.get('/emoji', function (data) {
//       $scope.emojis = data;
//       $scope.$apply();
//     });
//
//     io.socket.on('emoji', function(event){
//         switch (event.verb) {
//             case 'created':
//                 $scope.emojis.push(event.data);
//                 $scope.$apply();
//                 var ctx= canvas.getContext("2d");
//                 var color = hash.concat(event.data.text);
//                 ctx.fillStyle=color;
//                 ctx.fillRect(0,0,canvas.width,canvas.height);
//
//                 // // Red rectangle
//
//                 for(var i = 0; i < 10; i++){
//                   ctx.beginPath();
//                   ctx.rect(50*(i) , 0, 50,50);
//                   ctx.strokeStyle="red";
//                   ctx.stroke();
//                 }
//
//                 break;
//         }
//     });
//
// }]);
//
// var canvas = document.createElement("canvas");
// canvas.id     = "CursorLayer";
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.style.position = "absolute";
// canvas.style.zIndex = 8;
// canvas.style.border = "1ptx solid";
//
// var hash = "#";
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(canvas);


angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope',function ($scope) {

    io.socket.get('/emoji', function (data) {
      $scope.emojis = data;
      $scope.$apply();
    });

    io.socket.on('emoji', function(event){
        switch (event.verb) {
            case 'created':
                $scope.emojis.push(event.data);
                $scope.$apply();
                var color = hash.concat(event.data.text);
                ctx.fillStyle=color;
                ctx.fillRect(0,0,canvas.width,canvas.height);
                var cube = new Grid(ctx);
                break;
            case 'clicked':
                alert(event.data.row);
                break;
        }
    });

}]);

var canvas = document.createElement("canvas");
canvas.id     = "CursorLayer";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.zIndex = 8;
canvas.style.border = "1ptx solid";

function drawCube(contxt, xpos, ypos){
  contxt.beginPath();
  this.square = contxt.fillRect(xpos,ypos,SIZE,SIZE);
  return this.square;
}

function Grid(context){
  context.beginPath();
  context.fillStyle='#000000'
  var rows = [];
  for(i = 3; i < (window.innerHeight); i+=32){
    var row = [];
    for (j = 3; j < window.innerWidth; j+=32){
      row.push(drawCube(context, j, i));
    }
    rows.push(row);
  }
  this.squares = rows;
}

var ctx = canvas.getContext("2d");
var cube = new Grid(ctx);

var hash = "#";
var SIZE = 30;
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
