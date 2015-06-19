var app = angular.module('wintest',['winjs']);

app.controller('mainController', maincontroller);

function maincontroller($scope){
	$scope.global = { titulo: "lere lerele" };
}