sweetSuite.controller('guidgenController', ['$scope', function ($scope) {
    $scope.generatedGuid = uuid.v4();

    $scope.generateGuid = function() {
        this.generatedGuid = uuid.v4();
    }
}]);