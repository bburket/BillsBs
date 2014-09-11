sweetSuite.module.controller('mainController', ["$route", "$scope", "siteConfig", function ($route, $scope, siteConfig) {
        /*
        var internalSelectedPlugin;
        
        function setSelectedPlugin() {
            var pluginName = $route.current && $route.current.params.toolName ? $route.current.params.toolName : "home";
            internalSelectedPlugin = siteConfig.plugins[pluginName];
        }
        
        $scope.$on('$viewContentLoaded', function () {
            setSelectedPlugin();
        });
        
        setSelectedPlugin();
        
        this.selectedPlugin = internalSelectedPlugin;
        this.plugins = siteConfig.plugins;
        */
        return {
            plugins: siteConfig.plugins
        }
}]);
 