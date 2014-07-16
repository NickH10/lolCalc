lolCalc.service("utilService", ["$http",
    function($http) {
        this.createUrl = function(authKey, region, baseUrl, apiUrl) {
            //add end url stuff too
            return "https://" + region + "." + baseUrl + "/" + region + apiUrl + "?api_key=" + authKey;
        };

        this.getRequest = function (path, callback) {
            // var json = "";
            // http.get(path, function (response) {
            //     response.on("data", function (chunk) {
            //         json += chunk;
            //     });

            //     response.on("error", function (error) {
            //         callback(error, null);
            //     });

            //     response.on("end", function () {
            //         try {
            //             json = JSON.parse(json);
            //         } catch (e) {
            //             callback(response.statusCode);
            //             return;
            //         }

            //         if (json.status && json.status.message !== 200) {
            //             callback(json.status.status_code + " " + json.status.message, null);
            //         } else {
            //             callback(null, json);
            //         }
            //     });
            // });
        };

    }
]);