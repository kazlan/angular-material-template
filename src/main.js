var app = angular.module('app',['ngMaterial','ngMdIcons']);

app.controller('mainController', maincontroller);

function maincontroller($scope){
	$scope.global = { titulo: "lere lerele" };
}