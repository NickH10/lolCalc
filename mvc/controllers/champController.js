lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "$location", "lolService", "dataService", 
	function($scope, $q, $routeParams, $location, lolService, dataService) {
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

		$scope.goToChamp = function(champ) {
            $location.path("Champion/"+champ);
        };
	}
]);