lolCalc.directive('champBlock', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="champion" ng-click="out()"><img src="http://ddragon.leagueoflegends.com/cdn/{{dragonVer}}/img/champion/{{champData.key}}.png"></img><span>{{champData.name}}</span></div>'
	};
});