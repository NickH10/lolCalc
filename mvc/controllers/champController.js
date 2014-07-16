lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "$timeout", "lolService",
	function($scope, $q, $routeParams, $timeout, lolService) {
		self.init = function(){
			$scope.loaded = false;
			if(isNaN($routeParams.champId)){ //champ name
				// lolService.getChampBy
			}
			else { //champ id
				lolService.getChampById($routeParams.champId)
				.then(function(data){
					$scope.loaded = true;
					console.log(data);
				});
			}
		};
		self.init();
	}
]);