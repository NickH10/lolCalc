lolCalc.service('searchService', [ "lolService",
	function(lolService) {
	    this.output = function(value){
	    	lolService.getLeagueMappedBySummIds("26317335", function(error, jsonObj){
					if(error) {
						console.log(error);
					}
					else {
						console.log(jsonObj);
					}
				}
			);
	    };
	}
]);