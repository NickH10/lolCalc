lolCalc.service("lolService", ["$q", "utilService",
	function($q, utilService) {

		var url = "",
			version = null,
			baseUrl = "api.pvp.net/api/lol",
			champUrl = "/v1.2/champion",
			gameUrl = "/v1.3/game/by-summoner/",
			leagueUrl = "/v2.5/league",
			bySumm = "/by-summoner/",
			byTeam = "/by-team/",
			staticData = "/static-data",
			staticUrl = "/v1.2/",
			playerStatsUrl = "/v1.3/stats/by-summoner/",
			summUrl = "/v1.4/summoner/",
			teamUrl = "/v2.3/team/",
			allChampData = {};

		var	basicCallback = function(error, jsonObj){
			if(error) {
				console.log(error);
			}
			else {
				console.log(jsonObj);
			}
		};

		function isEmpty(obj) {
			for(var key in obj) {
				if (obj.hasOwnProperty(key)) {
					return false;
				}
			}
			return true;
		}

		this.getVersions = function(callback) {
			var deferred = $q.defer();
			//TODO: replace na with region somehow (global variables perhaps?
			//cors issues, the below url is unacceptable use createurl maybe?
			// url = "http://ddragon.leagueoflegends.com/realms/na.json"
			if(version){
				deferred.resolve(version);
				return deferred.promise;
			}
			url = utilService.addKey("https://global.api.pvp.net/api/lol/static-data/na/v1.2/realm?");
			utilService.getRequest(url)
			.then(function(data){
				  // deferred.resolve(data);
				  deferred.resolve(data.v);
				  version = data.v;
			});
			return deferred.promise;
		};

		// /api/lol/static-data/{region}/v1.2/{inputType}/{id}
		this.getChampData = function(id) {
			var deferred = $q.defer();
			var singleChamp = (typeof id !== "undefined");

			if(!singleChamp && !isEmpty(allChampData)){
				deferred.resolve(allChampData);
				return deferred.promise;
			}

			if(!singleChamp) {
				url = utilService.addKey("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?");
			}
			else {
				url = utilService.addKey("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion/"+id+"?champData=all&");
			}

			utilService.getRequest(url)
			.then(function(data){
				//if we're getting a list, swap wukong to not be stupid
				if(typeof data.data != "undefined") {
					var holder = data.data["MonkeyKing"];
					delete data.data["MonkeyKing"];
					data.data["Wukong"] = holder;
				}
				if(!singleChamp){
					allChampData = data;
				}
				deferred.resolve(data);
			});
			return deferred.promise;
		};

		// /api/lol/{region}/v1.2/champion
		// /api/lol/{region}/v1.2/champion/{id}
		this.getChampById = function(champId, callback) {
			var deferred = $q.defer();
			champId = (typeof champId === "undefined" ? "" : "/"+champId+"?");
			url = utilService.createUrl(champUrl+champId);
			utilService.getRequest(url)
			.then(function(data){
				deferred.resolve(data);
			});
			return deferred.promise;
		};
		
		// /api/lol/{region}/v1.3/game/by-summoner/{summonerId}/recent
		this.getRecentGamesBySummId = function(summId, callback) {
			url = utilService.createUrl( gameUrl+summId+"/recent?");
			utilService.getRequest(url, callback);
		};

		// /api/lol/{region}/v2.4/league/by-summoner/{summonerIds}
		// /api/lol/{region}/v2.4/league/by-summoner/{summonerIds}/entry
		this.getLeagueMappedBySummIds = function(summIds, ifEntry, callback) {
			summIds = ifEntry ? summIds+"/entry?" : summIds + "?"
			url = utilService.createUrl(leagueUrl+bySumm+summIds);
			utilService.getRequest(url, callback);
		};

		// /api/lol/{region}/v2.4/league/by-team/{teamIds}
		// /api/lol/{region}/v2.4/league/by-team/{teamIds}/entry
		this.getLeagueMappedByTeamIds = function(teamIds, ifEntry, callback) {
			teamIds = ifEntry ? teamIds+"/entry?" : teamIds +"?"
			url = utilService.createUrl(leagueUrl+byTeam+teamIds);
			utilService.getRequest(url, callback);
		};

		// /api/lol/{region}/v2.4/league/challenger
		this.getChallengerTierLeagues = function(callback) {
			url = utilService.createUrl(leagueUrl+"/challenger?");
			utilService.getRequest(url, callback);
		};

		 // /api/lol/static-data/{region}/v1.2/{inputType}/{id}
		this.getStaticData = function(inputType, id) {
			// realm and versions do not have id search
			var type = ["item", "mastery", "rune", "summoner-spell", "realm", "versions"];
			if(type.indexOf(inputType) == -1 && typeof inputType !== "undefined") return;
			id = typeof id === "undefined" ? "" : "/"+id+"?" +inputType +"Data=all&";
			url = utilService.createUrl(staticUrl+inputType+id, baseUrl+staticData);
			utilService.getRequest(url)
			.then(function(data){
				deferred.resolve(data);
			});
			return deferred.promise;
		};

		// /api/lol/{region}/v1.3/stats/by-summoner/{summonerId}/ranked
		// /api/lol/{region}/v1.3/stats/by-summoner/{summonerId}/summary
		this.getPlayerStatsBySummId = function(summId, rankOrSumm, callback) {
			var endUrl = playerStatsUrl + summId + "/" + rankOrSumm + "?";
			url = utilService.createUrl(endUrl);
			utilService.getRequest(url, callback);
		};

		// /api/lol/{region}/v1.4/summoner/by-name/{summonerNames}
		this.getSummonerByName = function(summName, callback) {
			url = utilService.createUrl(summUrl+"by-name/"+summName + "?");
			utilService.getRequest(url, callback);
		};

		// /api/lol/{region}/v1.4/summoner/{summonerIds}/{{inputType}}
		this.getInputTypeBySummIds = function(summIds, inputType, callback) {
			//can be called without an inputType
			var type = ["name", "runes", "masteries"];
			if(type.indexOf(inputType) == -1 && typeof inputType !== "undefined") return;
			var endUrl = typeof inputType === "undefined" ? summIds : summIds +"/" + inputType+"?";
			url = utilService.createUrl(summUrl+endUrl);
			utilService.getRequest(url, callback);
		};

		// /api/lol/{region}/v2.3/team/by-summoner/{summonerIds}
		this.getTeamBySummonerIds = function(summId, callback) {
			url = utilService.createUrl(teamUrl+"by-summoner/"+summId+"?");
			utilService.getRequest(url, callback);
		}

		// /api/lol/{region}/v2.3/team/{teamIds}
		this.getTeamByTeamIds = function(teamId, callback) {
			url = utilService.createUrl(teamUrl+teamId+"?");
			utilService.getRequest(url, callback);
		}
	}
]);