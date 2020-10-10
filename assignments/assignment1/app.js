(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheck);

    LunchCheck.$inject = ['$scope'];

    function LunchCheck($scope){
        $scope.lunchItems = '';
        $scope.message = '';
        $scope.messageClass ='';

        $scope.checkIfTooMuch = function(){
            $scope.lunchItems = $scope.lunchItems.split(',').filter(item =>
                item.replace(/\s/g, '').length > 0
            );
            if($scope.lunchItems.length){
                $scope.message = ($scope.lunchItems.length > 3) ? 'Too much!' : 'Enjoy!';
                $scope.messageClass = 'has-success';
            } else {
                $scope.message = "Please enter data first";
                $scope.messageClass = 'has-error';
            }
        }
    }




})();