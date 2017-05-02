angular.module('Deapmines', []);
angular.module('Deapmines').controller('BaseCtrl', ['$scope',function ($scope) {
    io.socket.get('/log', function (data) {
      $scope.string = data;
      $scope.$apply();
    });
    io.socket.on('log', function(event){
        switch (event.verb) {
            case 'created':
              //scope.logEvent.push(event.data);
              //$scope.$apply(); 
              if(event.data.type=='board'){
                //ToDo
              }
              // Redraw one cell if that cell has been changed
              else if(event.data.type=='cell'){
                var x = event.data.payload.x;
                var y = event.data.payload.y;
                var player = event.data.payload.player;
                redraw(x,y,player);
              }
              break;
            case 'logEvent':
              alert('in logEvent');
              break;
         }
    });
}]);
