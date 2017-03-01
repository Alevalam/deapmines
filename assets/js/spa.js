angular.module('Platzi', []);
<<<<<<< HEAD
angular.module('Platzi').controller('CanvasCtrl', ['$scope', 
function CanvasCtrl($scope) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    $scope.data = [
       
    ];
    
    $scope.addData = function() {
        var id = 0;
        if($scope.data.length > 0) {
            id = $scope.data[$scope.data.length-1].id + 1;
        }
        var p = {id: id, x: $scope.x, y: $scope.y, height: $scope.height, width: $scope.width};
        $scope.data.push(p);
        $scope.x = '';
        $scope.y = '';
        $scope.height = '';
        $scope.width = '';
        draw($scope.data);
    };
    
    
    function draw(data) {
        for(var i=0; i<data.length; i++) {
            drawSquare(data[i]);
        }
    }
    
    function drawSquare(data) {
        context.beginPath();
        context.fillRect(data.x, data.y, data.height, data.width);
    }

    function isPointInsideRect(pointX,pointY,rectX,rectY,rectWidth,rectHeight){
    return  (rectX <= pointX) && (rectX + rectWidth >= pointX) &&
                 (rectY <= pointY) && (rectY + rectHeight >= pointY);
    }
    
    // setup
    canvas.width = 600;
    canvas.height = 400;
    context.globalAlpha = 1.0;
    context.beginPath();
    draw($scope.data);    
=======
angular.module('Platzi').controller('BaseCtrl', ['$scope',  function($scope){

io.socket.get('/emoji', function(data){
  $scope.emojis = data;
  $scope.$apply();
});

io.socket.on('emoji', function(event){
  switch(event.verb){
    case 'created':
    $scope.emojis.push(event.data);
    $scope.$apply();
    break;
  }
});

}]);

var canvas = document.createElement('canvas');

canvas.id = "CursorLayer";
canvas.width = window.innerWidth;
canvas.height = 768;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";


var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

var rectNum;
var boxWidth = (canvas.width-100)/10;
var offSet = 20;
var ctx= canvas.getContext("2d");
for(rectNum=0;rectNum<5 ;rectNum++){
ctx.fillRect(rectNum*(boxWidth+offSet),20,boxWidth,100);
>>>>>>> 736f5db6cc162ccda758e86e453ba51489c56b82
}

]);
