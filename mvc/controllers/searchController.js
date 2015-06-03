lolCalc.controller("searchCtrl", ["$scope", "$location",
    function($scope, $location) {
        $scope.selections = {1:"Champions",2:"Summoner",3:"Team"};
        $scope.userSelection = "Champions";
        $scope.$watch("userSelection", function(value){
            $scope.placeSub = value;
        });

        $scope.search = function(searchVal) {
            if(searchVal) {
                $scope.searchVal = searchVal;//could be optimized
            }
            if($scope.searchVal !== "" && $scope.userSelection) {
                $location.path($scope.userSelection+'/'+$scope.searchVal);
            }
        };

        $scope.goTo = function(location) {
            $location.path(location);
        };

        $scope.goHome = function() {
            $location.path("/");
        };
    }
]);