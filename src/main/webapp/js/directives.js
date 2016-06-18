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
        scope: {product: "=product"}

    };
});
