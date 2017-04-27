angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    $scope.getTrivia = mainService.getTrivia().then(function (response) {
        $scope.trivia = response.data.results;
        $scope.right = 0;
        $scope.wrong = 0;
        $scope.q = 0;
        $scope.done = false;
        $scope.message = "Fix this!"
        console.log(typeof $scope.trivia);
        for (let i = 0; i < $scope.trivia.lenght; i++){ 
            $scope.trivia[i].incorrect_answers.push($scope.trivia[i].correct_answer);
        }
    });
    $scope.guess = function (answer) {
        if($scope.trivia[$scope.q].incorrect_answers.indexOf(answer) == -1){
            $scope.right++;
        } else {
            $scope.wrong++;
        }
        $scope.q++;
        if ($scope.q == 10){
            $scope.done = true;
            if ($scope.right>$scope.wrong) {
                $scope.message = "You Win!";
            } else if ($scope.right < $scope.wrong) {
                $scope.message = 'You lose.';
            } else {
                $scope.message = "Tie Game"
            }
        }
    }


})