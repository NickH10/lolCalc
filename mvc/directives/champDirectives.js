lolCalc.directive('champBlock', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="champ" ng-click="goToChamp(champData.name)">\
				<img ng-src="http://ddragon.leagueoflegends.com/cdn/{{data.version}}/img/champion/{{champData.key}}.png"></img>\
				<span>{{champData.name}}</span>\
			</div>'
	};
});