lolCalc.controller("champCtrl", ["$scope", "$q", "$routeParams", "$location", "lolService", 
	function($scope, $q, $routeParams, $location, lolService, dataService) {

		var self = this;
		var skins = [];
		var skinIndex = 0;
		$scope.keys = ["Q","W","E","R"];

		this.init = function(){
			$scope.loaded = false;
			lolService.getVersions()
			.then(function(version){
			    $scope.dragonVer = version;
			});

			lolService.getChampData($routeParams.champName)
			.then(function(data){
				//TODO failure case
				$scope.loaded = true;
				console.log(data);
				$scope.data = data;
				if($routeParams.champName) {
					self.generateSkinUrls(data.key, data.skins);
				}
			});
		};
		this.init();

		$scope.goToChamp = function(champ) {
            $location.path("champions/"+champ);
        };

        $scope.changeImage = function(change) {
        	if(change == 'prev'){
        		skinIndex -= 1;
        		$scope.skin = skins[skinIndex];
        		if(skinIndex == 0){
        			$scope.prevDis = true;
        		}
        		if(skinIndex == skins.length-2){
        			$scope.nextDis = false;
        		}
        	}
        	else {
        		skinIndex += 1;
        		$scope.skin = skins[skinIndex];
        		if(skinIndex == skins.length-1){
        			$scope.nextDis = true;
        		}
        		if(skinIndex == 1){
        			$scope.prevDis = false;
        		}
        	}
        };

        this.generateSkinUrls = function(champName, skinInfo){
        	// window.skinInfo = skinInfo;
        	for (var i = 0; i < skinInfo.length; i++){
        		var temp = {};
        		temp['name'] = skinInfo[i].name;
        		temp['url'] = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+champName+"_"+skinInfo[i].num+".jpg";
        		skins.push(temp);
        	}
        	$scope.skin = skins[0];
        	$scope.prevDis = true;
        };
	}
]);