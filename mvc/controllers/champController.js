lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "lolService", "dataService",
	function($scope, $q, $routeParams, lolService, dataService) {
		this.init = function(){
			$scope.loaded = false;
			$scope.dragonVer = dataService.dragonVersion;
			var champId = $routeParams.champId;
			if(isNaN(champId)){ //champ name
				champId = dataService.returnChampId(champId);
			}
			lolService.getChampData(champId)
			.then(function(data){
				//TODO failure case
				$scope.loaded = true;
				console.log(data);
				$scope.champ = data;
			});
		};
		this.init();
	}
]);