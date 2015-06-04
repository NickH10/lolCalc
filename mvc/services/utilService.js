lolCalc.service("utilService", ["$http", "$q",
    function($http, $q) {
        var apiKey = "1b372fc4-967d-4bda-b314-2a679fa18ec7",
            region  = "na";

        this.createUrl = function(subjectUrl, baseUrl) {
            if (typeof baseUrl === 'undefined') {
                var baseUrl = "api.pvp.net/api/lol";
            }
            return "https://" + region + "." + baseUrl + "/" + region + subjectUrl + "api_key=" + apiKey;
        };

        this.addKey = function(url) {
            return url+"api_key="+apiKey;
        }


        this.getRequest = function (path) {
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