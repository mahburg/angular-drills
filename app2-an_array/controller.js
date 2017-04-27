angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    $scope.array = mainService.getData();
})