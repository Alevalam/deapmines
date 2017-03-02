angular.module('Platzi', []);
angular.module('Platzi').controller('CanvasCtrl', ['$scope', 
function CanvasCtrl($scope) {
    $scope.data = [  
    ];

    io.socket.get('/deapmine', function add(data) {
      $scope.deapmines = data;
      $scope.$apply();
    });

    io.socket.on('deapmine', function(event){
        switch (event.verb) {
            case 'created':
                $scope.deampines.push(event.data);
                $scope.$apply();
                var color = hash.concat(event.data.text);
                context.fillStyle=color;
                context.fillRect(0,0,canvas.width,canvas.height);
                break;
        }
    });

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
    };
    
    function drawSquare(data) {
        context.beginPath();
        context.fillRect(data.x, data.y, data.height, data.width);
    }

    function isPointInsideRect(pointX,pointY,rectX,rectY,rectWidth,rectHeight){
    return  (rectX <= pointX) && (rectX + rectWidth >= pointX) &&
                 (rectY <= pointY) && (rectY + rectHeight >= pointY);
    }


    // setup
}]);  
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;
    context.globalAlpha = 1.0;
    context.beginPath();


 