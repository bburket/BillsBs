/*sweetSuite.controller('homeController', ["$routeParams", "siteConfig", function ($routeParams, siteConfig) {
    this.selectedPlugin = siteConfig.plugins[0];
    this.plugins = siteConfig.plugins;
    if ($routeParams.toolName && siteConfig.plugins[$routeParams.toolName]) {
        this.selectedPlugin = $routeParams.toolName;
    }
}]);
 * */