lolCalc.directive('champBlock', function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="champion" ng-click="goToChamp(champData.id)">\
				<img src="http://ddragon.leagueoflegends.com/cdn/{{data.version}}/img/champion/{{champData.key}}.png"></img>\
				<span>{{champData.name}}</span>\
			</div>'
	};
});