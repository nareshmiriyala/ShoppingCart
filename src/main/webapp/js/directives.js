app.directive('mySample', function () {
    return {
        restrict: 'C',
        templateUrl: "pages/sample_data.html"

    };
});

app.directive('productThumbnail', function () {
    return {
        templateUrl: "pages/product.html"

    };
});
