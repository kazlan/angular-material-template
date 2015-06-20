var app = angular.module('app',['ngMaterial']);

app.controller('mainController', maincontroller);

function maincontroller($scope){
	$scope.global = { titulo: "lere lerele" };
}