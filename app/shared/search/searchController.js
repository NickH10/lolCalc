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
                console.log(champNameList);
                $scope.champNameList = champNameList;
            });
        }
        this.init();

        $scope.search = function(champName){
            //if we have something selected from suggestions
            if(typeof($scope.currentIndex) != 'undefined'){
                var list = document.getElementById('search-filter-list').getElementsByTagName('li');
                $scope.searchVal = list[$scope.currentIndex].innerText;
            }
            if(typeof(champName) !== 'undefined'){
                $scope.searchVal = champName;
            }
            $location.path($scope.userSelection.toLowerCase()+'/'+$scope.searchVal);
            $scope.suggestionList = '';
        };

        $scope.changeIndex = function(position){
            if($scope.suggestionList != ''){
                var list = document.getElementById('search-filter-list').getElementsByTagName('li');
                var haveIndex = typeof($scope.currentIndex) != 'undefined';
                if(haveIndex){
                    list[$scope.currentIndex].classList.remove('hovered');
                }
                if(position == 'up'){
                    if(haveIndex){
                        $scope.currentIndex = $scope.currentIndex-1;
                    }
                    else {
                        $scope.currentIndex = list.length-1;
                    }
                }
                else if(position == 'down'){
                    if(haveIndex){
                        $scope.currentIndex = $scope.currentIndex+1;
                    }
                    else {
                        $scope.currentIndex = 0;
                    }
                }
                else {
                    $scope.currentIndex = position;
                }
                if($scope.currentIndex < 0 || $scope.currentIndex >= list.length){
                    $scope.currentIndex = undefined;
                }
                else {
                    // console.log(list);
                    list[$scope.currentIndex].classList.add('hovered');
                    // $scope.searchVal = list[$scope.currentIndex].innerText;
                }
            }
        }

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

        $scope.clearSearch = function(){
            $scope.searchVal = '';
            document.getElementById('search-input').focus();
        }

        $scope.goTo = function(location) {
            $location.path(location);
        };

        $scope.goHome = function() {
            $location.path("/");
        };
    }
]);