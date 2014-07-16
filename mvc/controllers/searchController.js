lolCalc.controller("searchCtrl", ["$scope", "$location",
    function($scope, $location) {
        $scope.selections = {1:"Champion",2:"Summoner",3:"Team"};
        $scope.userSelection = "Champion";
        $scope.$watch("userSelection", function(value){
            $scope.placeSub = value;
        });

        $scope.search = function() {
            if($scope.searchVal !== "" && $scope.userSelection) {
                $location.path($scope.userSelection+'/'+$scope.searchVal);
            }
        };

        $scope.goHome = function() {
            $location.path("/");
        };
    }
]);