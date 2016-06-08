/**
 * Created by nareshm on 6/11/2015.
 */

var blogController = function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
};


var pageController = function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
};

var productFunction = function ($scope, $http, $uibModal) {
    $scope.cart = [];
    $http.get('/products')
        .then(function (response) {
            $scope.products = response.data;
        });
    $scope.addToCart = function (product) {
        var found = false;
        $scope.cart.forEach(function (item) {
            if (item.id === product.id) {
                item.quantity++;
                found = true;
            }
        });
        if (!found) {
            $scope.cart.push(angular.extend({quantity: 1}, product));
        }
    };
    $scope.getCartPrice = function () {
        var total = 0;
        $scope.cart.forEach(function (product) {
            total += product.unitPrice * product.quantity;
        });
        return total;
    };

    $scope.checkout = function () {
        $uibModal.open({
            templateUrl: 'pages/checkout.html',
            animation: true,
            controller: 'CheckoutCtrl',
            resolve: {
                totalAmount: $scope.getCartPrice
            },
            scope: $scope,
            size:'lg'
        });
    };
};

var checkOutController=function($scope,totalAmount){
    $scope.totalAmount = totalAmount;
    console.log("Amount:"+totalAmount);

    $scope.onSubmit = function () {
        $scope.processing = true;
    };

    $scope.stripeCallback = function (code, result) {
        $scope.processing = false;
        $scope.hideAlerts();
        if (result.error) {
            $scope.stripeError = result.error.message;
        } else {
            $scope.stripeToken = result.id;
        }
    };

    $scope.hideAlerts = function () {
        $scope.stripeError = null;
        $scope.stripeToken = null;
    };
};