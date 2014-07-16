lolCalc.controller("searchCtrl", ["$scope", "$location", "searchService", 
    function($scope, $location, searchService) {
        $scope.selections = {1:"Champion",2:"Summoner",3:"Team"};
        $scope.userSelection = "Champion";
        $scope.$watch("userSelection", function(value){
            $scope.placeSub = value;
        });

        $scope.search = function() {
            if($scope.searchVal !== "" && $scope.userSelection) {
                // $scope.searchVal = searchService.output($scope.searchVal);
                $location.path($scope.userSelection);
            }
        };

        $scope.goHome = function() {
            $location.path("/");
        };
    }
]);