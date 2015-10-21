lolCalc.directive('ngEnter', function(){
	return {
		link: function(scope, elements, attrs){
			elements.bind('keydown keypress', function(event){
				if(event.which === 13) {
					scope.$apply(function(){
						scope.$eval(attrs.ngEnter);
					});
					event.preventDefault();
				}
			});
		}
	};
});

//38 up arrow, 40 down arrow
lolCalc.directive('ngNavigate', function() {
	return {
		link: function(scope, elements, attrs){
			elements.bind('keydown keypress', function(event){
				var attributes = attrs.ngNavigate.split(" ");
				if(event.which === 38) {
					scope.$apply(function(){
						scope.$eval(attributes[0]);
					});
					event.preventDefault();
				}
				else if(event.which === 40) {
					scope.$apply(function(){
						scope.$eval(attributes[1]);
					});
					event.preventDefault();
				}
				
			});
		}
	};
});