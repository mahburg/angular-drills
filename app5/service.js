angular.module('app').service('mainService', function ($http) {
    let apiUrl = 'https://opentdb.com/api.php?amount=10'
    this.getTrivia = function () {
        return $http({
            method: "GET",
            url: apiUrl
        });
    }
})