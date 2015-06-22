var lolCalc = angular.module("lolCalc",["ngRoute"])

.config(function($routeProvider) { $routeProvider

	.when("/", {
		controller: "homeCtrl",
		templateUrl:"mvc/views/home.html"
	})

	.when("/champions/", {
		controller: "champCtrl",
		templateUrl:"mvc/views/champions.html"
	})

	.when("/champions/:champName", {
		controller: "champCtrl",
		templateUrl:"mvc/views/champion.html"
	})

	.when("/error", {
		templateUrl:"mvc/views/error.html"
	})

})
