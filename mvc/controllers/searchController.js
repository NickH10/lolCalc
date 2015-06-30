lolCalc.controller("searchCtrl", ["$scope", "$location", "lolService",
    function($scope, $location, lolService) {
        $scope.selections = {1:"Champions",2:"Summoner",3:"Team"};
        $scope.userSelection = "Champions";
        $scope.$watch("userSelection", function(value){
            $scope.placeSub = value;
        });
        $scope.hideImages = true;

        this.init = function() {
            lolService.getChampNames()
            .then(function(champNameList){
                // console.log(champNameList);
                $scope.champNameList = champNameList;
            });
        }
        this.init();

        $scope.search = function(champName) {
            if(typeof(champName) !== 'undefined') {
                $scope.searchVal = champName;
            }
            $location.path($scope.userSelection.toLowerCase()+'/'+$scope.searchVal);
        };

        $scope.$watch('searchVal', function() {
            $scope.checkSearch();
        });

        $scope.checkSearch = function(){
            if(typeof($scope.searchVal) !== 'undefined' && $scope.searchVal.length > 1){
                $scope.suggestionList = 'suggest';
            }
            else {
                $scope.suggestionList = '';
            }
        }

        $scope.goTo = function(location) {
            $location.path(location);
        };

        $scope.goHome = function() {
            $location.path("/");
        };
    }
]);