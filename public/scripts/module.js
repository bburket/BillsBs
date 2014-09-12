﻿var sweetSuite = {};
sweetSuite.module = angular.module('sweetSuite', ['ngRoute']);

(function () {
    var siteConfig = {};
    siteConfig.plugins = {};
    siteConfig.plugins = {
        "home" : { key: "home", displayName: "Home", templateUrl: "/templates/home.html", navUrl: "", orderId: 0},
        "guidgen": { key: "guidgen", displayName: "GuidGen", templateUrl: "/templates/guidgen.html", navUrl: "tools/guidgen", orderId: 1},
        "jsonPrettyPrint": { key:"jsonPrettyPrint", displayName: "Pretty Json", templateUrl: "/templates/jsonPrettyPrint.html", navUrl: "tools/jsonPrettyPrint", orderId: 2}
    }
    
    sweetSuite.module.value("siteConfig", siteConfig);
    sweetSuite.uninjectedSiteConfig = siteConfig;
})();

(function() {
    sweetSuite.module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/tools/:toolName', {
            templateUrl: function (rp) {
                return 'templates/' + rp.toolName + '.html';
            },
        }).when('/', {
            templateUrl: sweetSuite.uninjectedSiteConfig.plugins.home.templateUrl
        });
        
        $locationProvider.html5Mode(true);
    }]);
})();

(function() {
    sweetSuite.module.filter('object2Array', function() {
        return function(input, value) {
            var out = [];
            for (i in input) {
                out.push(input[i]);
            }
            return out;
        }
    });
})();
