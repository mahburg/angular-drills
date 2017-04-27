angular.module('app').service('mainService', function ($http) {
    this.getShips = function () {
        return $http({
            method: "GET",
            url: 'http://swapi.co/api/starships'
        });
    };
    
})