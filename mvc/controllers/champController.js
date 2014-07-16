lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "lolService", "dataService",
	function($scope, $q, $routeParams, lolService, dataService) {
		this.init = function(){
			$scope.loaded = false;
			var champId = $routeParams.champId;
			if(isNaN(champId)){ //champ name
				champId = dataService.returnChampId(champId);
			}
			lolService.getChampData(champId)
			.then(function(data){
				//TODO failure case
				$scope.loaded = true;
				console.log(data);
			});
		};
		this.init();
	}
]);