lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "$location", "lolService", 
	function($scope, $q, $routeParams, $location, lolService, dataService) {
		$scope.keys = ["Q","W","E","R"];
		this.init = function(){
			$scope.loaded = false;
			lolService.getVersions()
			.then(function(versions){
			    $scope.dragonVer = versions.v;
			});

			lolService.getChampData($routeParams.champId)
			.then(function(data){
				//TODO failure case
				$scope.loaded = true;
				console.log(data);
				$scope.data = data;
			});
		};
		this.init();

		$scope.goToChamp = function(champ) {
            $location.path("Champions/"+champ);
        };
	}
]);