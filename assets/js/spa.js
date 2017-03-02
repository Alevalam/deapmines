angular.module('Platzi', []);
angular.module('Platzi').controller('CanvasCtrl', ['$scope', 
function CanvasCtrl($scope) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    $scope.data = [  
    ];

    io.socket.get('/deapmines', function (data) {
    $scope.deapmines = data;
    $scope.$apply();
});

    io.socket.on('deapmines', function(event){
        switch (event.verb) {
            case 'created':
                $scope.emojis.push(event.data);
                $scope.$apply();
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
    canvas.width = 600;
    canvas.height = 400;
    context.globalAlpha = 1.0;
    context.beginPath();
    draw($scope.data);

}]);  


 