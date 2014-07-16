lolCalc.service("utilService", ["$http", "$q",
    function($http, $q) {
        this.createUrl = function(authKey, region, baseUrl, apiUrl) {
            //add end url stuff too
            return "https://" + region + "." + baseUrl + "/" + region + apiUrl + "?api_key=" + authKey;
        };

        this.getRequest = function (path, callback) {
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