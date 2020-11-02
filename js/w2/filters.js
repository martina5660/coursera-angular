(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', '$filter', 'lovesFilter', 'truthFilter'];

function MsgController($scope, $filter, lovesFilter, truthfilter){
	$scope.name = 'Yaakov';
	$scope.stateOfBeing = 'hungry';
	$scope.cookieCost = .6745;
	$scope.msg = $scope.name + ' likes to eat healthy snacks at night!';

	$scope.sayMessage = function(){
		var output = $filter('uppercase')($scope.msg);
		return output;
	}

	$scope.sayLovesMessage = function(){
		var output = lovesFilter($scope.msg);
		return output;
	}


	$scope.feedYaakov = function(){
		$scope.stateOfBeing = 'fed'
	}

}

function LovesFilter(){
	return function(input){
		input = input || ''
		input = input.replace('likes', 'loves');
		return input;
	};
}


function TruthFilter(){
	return function(input, target, replace){
		input = input || ''
		input = input.replace(target, replace);
		return input;
	};
}


})();
