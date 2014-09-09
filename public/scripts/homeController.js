sweetSuite.controller('homeController', ['$scope', function ($scope) {
    
    $scope.plugins = [
        { name: "Home", templateUrl: "" },
        { name: "GuidGen", templateUrl: "" },
        { name: "Pretty Json", templateUrl: "" }
    ];


    $scope.selectedPlugin = $scope.plugins[0];

    $scope.pluginNavClick = function(plugin) {
        $scope.selectedPlugin = plugin;
    }
}]);