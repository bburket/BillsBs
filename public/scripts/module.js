var sweetSuite = angular.module('sweetSuite', ['ngRoute']);

(function() {
sweetSuite.config(['$routeProvider', '$route', function ($routeProvider, $route) {
    var siteConfig = {};
    siteConfig.plugins = {};
    siteConfig.plugins = {"home" : { name: "Home", templateUrl: "", navUrl: "" },
                         "guidgen": { name: "GuidGen", templateUrl: "/templates/guidgen.html", navUrl: "/tools/guidgen", controller: "guidgenController" },
                         "prettyJson": { name: "Pretty Json", templateUrl: "", navUrl: ""}}
        
    sweetSuite.value("siteConfig", siteConfig);

    $routeProvider.when('/tools/:toolName', {
        templateUrl: 'templates/' + $route.current.toolName + '.html',
        controller: plugins[$route.current.toolName],
        controllerAs: "toolController"
    });
}]);
})();
