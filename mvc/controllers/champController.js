lolCalc.controller("champCtrl", ["$scope", "$q", "$timeout",
	function($scope, $q, $timeout) {
		$scope.loaded = false;
		// var deferred = $q.defer();
		$timeout(function(){
			// var champ = {"id":10,"active":true,"botEnabled":true,"freeToPlay":false,"botMmEnabled":true,"rankedPlayEnabled":true};
			$scope.loaded = true;
			// deferred.resolve(champ)
		}, 5000);
		// return deferred.promise;
	}
]);