angular.module('Platzi', []);
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
canvas.width = 1124;
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
}
