angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope',function ($scope) {

    io.socket.get('/emoji', function (data) {
      $scope.emojis = data;
      $scope.$apply();
    });

    io.socket.on('emoji', function(event){
        switch (event.verb) {
            case 'created':
                var hash = "#";
                var color = hash.concat(event.data.text);
                var canvas = document.createElement("canvas");
                canvas.id = "CursorLayer";
                canvas.width = 300;
                canvas.height = 300;
                canvas.style.position = "absolute";
                canvas.style.zIndex = 8;
                canvas.style.border = "1ptx solid";
                //var ctx = canvas.getContext("2d");
                // ctx.fillStyle=color;
                // ctx.fillRect(0,0,canvas.width,canvas.height);
                var gameboard = new Grid(canvas, color, 10, 10);
                canvas.onclick = gameboard.onclick;
                gameboard.draw();
                var body = document.getElementsByTagName("body")[0];
                body.appendChild(canvas);
                $scope.emojis.push(event.data);
                $scope.$apply();
                break;
            case 'clicked':
                alert('hello');
                break;
        }
    });

}]);
