angular.module('app').controller('mainCtrl', function ($scope, mainService) {
    
    $scope.getTrivia = function () {
        mainService.getTrivia().then(function (response) {
                $scope.trivia = response.data.results;
                $scope.right = 0;
                $scope.wrong = 0;
                $scope.q = 0;
                $scope.done = false;
                $scope.message = "Fix this!"
                console.log(typeof $scope.trivia);
                for (let i = 0; i < $scope.trivia.length; i++) {
                    $scope.trivia[i].incorrect_answers.push($scope.trivia[i].correct_answer);
                    $scope.trivia[i].incorrect_answers.sort();
                }
            })
        }

    $scope.guess = function (answer) {
        if ($scope.trivia[$scope.q].correct_answer === answer) {
            $scope.right++;
        } else {
            $scope.wrong++;
        }
        $scope.q++;
        if ($scope.q == 10) {
            $scope.done = true;
            if ($scope.right > $scope.wrong) {
                $scope.message = "You Win!";
            } else if ($scope.right < $scope.wrong) {
                $scope.message = 'You lose.';
            } else {
                $scope.message = "Tie Game"
            }
        }
    }

    $scope.playAgain = function () {
        $scope.getTrivia();
    }
    $scope.getTrivia();

})