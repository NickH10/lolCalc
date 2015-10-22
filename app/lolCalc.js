var lolCalc = angular.module("lolCalc",["ngRoute"])

.config(function($routeProvider) { $routeProvider

	.when("/", {
		controller: "homeCtrl",
		templateUrl:"/app/components/home/home.html"
	})

	.when("/champions/", {
		controller: "champCtrl",
		templateUrl:"/app/components/champion/champions.html"
	})

	.when("/champions/:champName", {
		controller: "champCtrl",
		templateUrl:"/app/components/champion/champion.html"
	})

	.when("/loading", {
		templateUrl: "/app/components/static/loading.html"
	})

	.when("/error", {
		templateUrl:"/app/components/static/error.html"
	})

})
