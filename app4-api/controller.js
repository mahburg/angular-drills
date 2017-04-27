angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    mainService.getShips().then(function (response) {
        $scope.ships = response.data.results;
        $scope.next = response.data.next;
    });
    
})