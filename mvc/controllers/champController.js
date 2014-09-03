lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "lolService", "dataService",
	function($scope, $q, $routeParams, lolService, dataService) {
		this.init = function(){
			$scope.loaded = false;
			$scope.dragonVer = dataService.dragonVersion;
			var champId = $routeParams.champId ? dataService.returnChampId($routeParams.champId) : undefined;

			lolService.getChampData(champId)
			.then(function(data){
				//TODO failure case
				$scope.loaded = true;
				console.log(data);
				$scope.data = data;
			});
		};
		this.init();
	}
]);