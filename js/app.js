(function () {
'use strict';

angular.module('NameCalculator', [])
.controller('NameCalculatorController', function ($scope) {
    $scope.name='';
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
        $scope.totalValue = calculateNumericForString($scope.name);
    }

    function calculateNumericForString(string){
        var totalStringValue = 0;
        for (let letter of string){
            totalStringValue += letter.charCodeAt(0);
        }
        return totalStringValue;
    }

});

angular.module('DI', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];

function DIController($scope, $filter){
    $scope.name = 'Anna';

    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    }
}


angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope){
    $scope.name = 'Yaakov';
    $scope.stateOfBeing = 'hungry';
    $scope.whatToDo = 'Feed Yaakov';

    $scope.sayMessage = function(){
        return this.name + ' likes to eat a healthy snacks at night!';
    }

    $scope.feedYaakov = function(){
        $scope.stateOfBeing = ($scope.stateOfBeing == 'hungry') ? 'fed' : 'hungry';
        $scope.whatToDo = ($scope.whatToDo == 'Feed Yaakov') ? 'Ate Enough' : 'Feed Yaakov';
    }
}



// angular.module('', [])
// .controller('', function(){

// });


})();
