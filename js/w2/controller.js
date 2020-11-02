(function(){
    'use strict'

    angular.module('ControllerExmpl', [])
    .controller('ParentCtrl1', ParentCtrl1)
    .controller('ChildCtrl1', ChildCtrl1)
    .controller('ParentCtrl2', ParentCtrl2)
    .controller('ChildCtrl2', ChildCtrl2)


    ParentCtrl1.$inject = ['$scope']
    function ParentCtrl1($scope){
        $scope.parentValue = 1;
        $scope.pc = this;
        $scope.pc.parentValue = 1;
    }

    
    ChildCtrl1.$inject = ['$scope']
    function ChildCtrl1($scope){
        console.log("$scope.parentValue: ", $scope.parentValue);
        console.log("CHILD $scope: ", $scope);
        
        $scope.parentValue = 5;
        console.log("*** CHANGED: $scope.parentValue = 5 ***");
        console.log("$scope.parentValue: ", $scope.parentValue);
        console.log($scope);
        
        console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
        $scope.pc.parentValue = 5;
        console.log("** CHANGED: $scope.pc.parentValue = 5; ***");
        console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
        console.log("$scope: ", $scope);
        
        console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
    }

    // ** Controller As syntax
    function ParentCtrl2() {
        var parent = this;
        parent.value = 1;
    }

    ChildCtrl2.$inject = ['$scope'];

    function ChildCtrl2($scope) {
        var child = this;
        child.value = 5;
        console.log("ChildCtrl2 $scope: ", $scope);
    }
  

})();