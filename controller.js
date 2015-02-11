var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
	
	var getData = function() {
		mainService.getUsers().then(function(data) {
			$scope.users = data;
		});
	};

	getData();

});