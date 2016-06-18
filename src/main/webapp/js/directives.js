app.directive('mySample', function () {
    return {
        restrict: 'C',
        templateUrl: "pages/sample_data.html",
        scope: {}

    };
});

app.directive('productThumbnail', function () {
    return {
        restrict: 'E',
        templateUrl: "pages/product.html",
        controller: 'productController',
        scope: {product: "=product"},


    };
});
app.directive('collapsible', function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<div><h4 ng-click='toggleVisibility()' data-toggle='tooltip' title='click to see the product description' >{{name}}</h4><div ng-transclude ng-show='visible'></div> </div>",
        controller: function ($scope) {
            $scope.visible = false;
            $scope.toggleVisibility = function () {
                $scope.visible = !$scope.visible;
            }
        },
        transclude: true,
        scope: {name: "@"}

    };
});
