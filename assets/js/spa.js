angular.module('Deapmines', []);
angular.module('Deapmines').controller('BaseCtrl', ['$scope',function ($scope) {
    io.socket.get('/log', function (data) {
      $scope.string = data;
    //  alert(JSON.stringify(data));
      $scope.$apply();
    });



    io.socket.on('log', function(event){
        alert('some event');
        switch (event.verb) {
            case 'created':
              alert('in created');
              alert(JSON.stringify(event.type));
            //  scope.logEvent.push(event.data);
              // $scope.$apply();
              break;
            case 'logEvent':
              alert('in logEvent');
              break;
            // case 'hi':
            //   $scope.boards.push(event.data);
            //   $scope.$apply();
            //   alert(event.data.res);
            //   break;
            // // case 'created':
            //   //  var hash = "#";
            //   //  var color = hash.concat(event.data.text);
            //     //var numBombs = event.data.text;
            //     var array = (event.data.text).split(",");
            //
            //     var canvas = document.createElement("canvas");
            //     canvas.id = "CursorLayer";
            //     canvas.width = 300;
            //     canvas.height = 300;
            //     canvas.style.position = "absolute";
            //     canvas.style.zIndex = 8;
            //     canvas.style.border = "1ptx solid";
            //     //var ctx = canvas.getContext("2d");
            //     // ctx.fillStyle=color;
            //     // ctx.fillRect(0,0,canvas.width,canvas.height);
            //     var height = 10;
            //     var width = 10;
            //     //var array = new gridArray(numBombs, (height*width));
            //   //  var test = new gridArray();
            //     var gameboard = new Grid(canvas, array, height,width);
            //     canvas.onclick = gameboard.onclick;
            //     gameboard.draw();
            //     var body = document.getElementsByTagName("body")[0];
            //     body.appendChild(canvas);
            //     $scope.emojis.push(event.data);
            //     $scope.$apply();
            //     break;
        }
    });

}]);
