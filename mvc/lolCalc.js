var lolCalc = angular.module("lolCalc",["ngRoute"])

.config(function($routeProvider) { $routeProvider

	.when("/", {
		controller: "homeCtrl",
		templateUrl:"mvc/views/home.html"
	})

	.when("/Champion/:champId", {
		controller: "champCtrl",
		templateUrl:"mvc/views/champion.html"
	})

	.when("/error", {
		templateUrl:"mvc/views/error.html"
	})

})
