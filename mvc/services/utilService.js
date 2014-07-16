lolCalc.service("utilService", ["$http", "$q",
    function($http, $q) {
        this.createUrl = function(authKey, region, baseUrl, apiUrl) {
            //TODO add end url stuff too
            return "https://" + region + "." + baseUrl + "/" + region + apiUrl + "api_key=" + authKey;
        };

        this.getRequest = function (path) {
            //TODO consider returning more than just data
            var deferred = $q.defer();
            $http({method: 'GET', url: path})
            .success(function(data, status, headers, config) {
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        };

    }
]);