var app = angular.module('app',[]);

app.controller('mainController', maincontroller);

function maincontroller($scope){
	$scope.global = { titulo: "lere lerele" };
}