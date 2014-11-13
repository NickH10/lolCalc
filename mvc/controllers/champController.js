lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "$location", "lolService", "dataService", 
	function($scope, $q, $routeParams, $location, lolService, dataService) {
		this.init = function(){
			$scope.loaded = false;
			dataService.getVersions()
			.then(function(versions){
			    $scope.dragonVer = versions.v;
			});

			dataService.returnChampId($routeParams.champId)
			.then(function(champId){
				lolService.getChampData(champId)
				.then(function(data){
					//TODO failure case
					$scope.loaded = true;
					window.data = data;
					console.log(data);
					$scope.data = data;
				});
			});
		};
		this.init();

		$scope.goToChamp = function(champ) {
            $location.path("Champion/"+champ);
        };
	}
]);