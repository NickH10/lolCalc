lolCalc.service("dataService",  ["$q", "utilService",
    function($q, utilService) {
      var self = this;

      //TODO: use this to add versions to lolservice
      this.getVersions = function(callback) {
            var deferred = $q.defer();
            //TODO: replace na with region somehow (global variables perhaps?
            // url = "http://ddragon.leagueoflegends.com/realms/na.json"
            //cors issues, the below url is unacceptable
            url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/realm?api_key=1b372fc4-967d-4bda-b314-2a679fa18ec7"
            utilService.getRequest(url)
            .then(function(data){
                  deferred.resolve(data);
            });
            return deferred.promise;
      };

      //TODO: generate permanent champ list
      // this.generateChampList = function(callback) {
      //       var deferred = $q.defer();
      //       var champList = {};
            // do this manually using utilservice so we dont get circular dependency
            // lolService.getChampData()
            // .then(function(data){
            //       Object.keys(data.data).forEach(function(key) {
            //             champList[key] = data.data[key];
            //       });
            //       deferred.resolve(champList);
            // });
      //       return deferred.promise;
      // };
      // this.generateChampList();

      // this.returnChampId = function(champName) {
      //       var deferred = $q.defer();
      //       if(champName) {
      //             champName = champName.replace(/[^A-Z0-9]/ig, "").toUpperCase();
      //             deferred.resolve(champList[champName]);
      //       }
      //       else {
      //             deferred.resolve(undefined);
      //       }
      //       return deferred.promise;
      // };

      // var champList = {
      //       "AATROX": 266,
      //       "AHRI": 103,
      //       "AKALI": 84,
      //       "ALISTAR": 12,
      //       "AMUMU": 32,
      //       "ANIVIA": 34,
      //       "ANNIE": 1,
      //       "ASHE": 22,
      //       "AZIR": 268,
      //       "BLITZCRANK": 53,
      //       "BRAND": 63,
      //       "BRAUM": 201,
      //       "CAITLYN": 51,
      //       "CASSIOPEIA": 69,
      //       "CHOGATH": 31,
      //       "CORKI": 42,
      //       "DARIUS": 122,
      //       "DIANA": 131,
      //       "DRMUNDO": 36,
      //       "DRAVEN": 119,
      //       "ELISE": 60,
      //       "EVELYNN": 28,
      //       "EZREAL": 81,
      //       "FIDDLESTICKS": 9,
      //       "FIORA": 114,
      //       "FIZZ": 105,
      //       "GALIO": 3,
      //       "GANGPLANK": 41,
      //       "GAREN": 86,
      //       "GNAR": 150,
      //       "GRAGAS": 79,
      //       "GRAVES": 104,
      //       "HECARIM": 120,
      //       "HEIMERDINGER": 74,
      //       "IRELIA": 39,
      //       "JANNA": 40,
      //       "JARVANIV": 59,
      //       "JAX": 24,
      //       "JAYCE": 126,
      //       "JINX": 222,
      //       "KARMA": 43,
      //       "KARTHUS": 30,
      //       "KASSADIN": 38,
      //       "KATARINA": 55,
      //       "KAYLE": 10,
      //       "KENNEN": 85,
      //       "KHAZIX": 121,
      //       "KOGMAW": 96,
      //       "LEBLANC": 7,
      //       "LEESIN": 64,
      //       "LEONA": 89,
      //       "LISSANDRA": 127,
      //       "LUCIAN": 236,
      //       "LULU": 117,
      //       "LUX": 99,
      //       "MALPHITE": 54,
      //       "MALZAHAR": 90,
      //       "MAOKAI": 57,
      //       "MASTERYI": 11,
      //       "MISSFORTUNE": 21,
      //       // "MONKEYKING": 62,
      //       "MORDEKAISER": 82,
      //       "MORGANA": 25,
      //       "NAMI": 267,
      //       "NASUS": 75,
      //       "NAUTILUS": 111,
      //       "NIDALEE": 76,
      //       "NOCTURNE": 56,
      //       "NUNU": 20,
      //       "OLAF": 2,
      //       "ORIANNA": 61,
      //       "PANTHEON": 80,
      //       "POPPY": 78,
      //       "QUINN": 133,
      //       "RAMMUS": 33,
      //       "RENEKTON": 58,
      //       "RENGAR": 107,
      //       "RIVEN": 92,
      //       "RUMBLE": 68,
      //       "RYZE": 13,
      //       "SEJUANI": 113,
      //       "SHACO": 35,
      //       "SHEN": 98,
      //       "SHYVANA": 102,
      //       "SINGED": 27,
      //       "SION": 14,
      //       "SIVIR": 15,
      //       "SKARNER": 72,
      //       "SONA": 37,
      //       "SORAKA": 16,
      //       "SWAIN": 50,
      //       "SYNDRA": 134,
      //       "TALON": 91,
      //       "TARIC": 44,
      //       "TEEMO": 17,
      //       "THRESH": 412,
      //       "TRISTANA": 18,
      //       "TRUNDLE": 48,
      //       "TRYNDAMERE": 23,
      //       "TWISTEDFATE": 4,
      //       "TWITCH": 29,
      //       "UDYR": 77,
      //       "URGOT": 6,
      //       "VARUS": 110,
      //       "VAYNE": 67,
      //       "VEIGAR": 45,
      //       "VELKOZ": 161,
      //       "VI": 254,
      //       "VIKTOR": 112,
      //       "VLADIMIR": 8,
      //       "VOLIBEAR": 106,
      //       "WARWICK": 19,
      //       "WUKONG": 62,
      //       "XERATH": 101,
      //       "XINZHAO": 5,
      //       "YASUO": 157,
      //       "YORICK": 83,
      //       "ZAC": 154,
      //       "ZED": 238,
      //       "ZIGGS": 115,
      //       "ZILEAN": 26,
      //       "ZYRA": 143
      //   };

    }
]);
