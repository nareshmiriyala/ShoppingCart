/**
 * Created by nareshm on 6/11/2015.
 */

var blogController = function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
};
/**
 * Controls the Blog
 */
app.controller('BlogCtrl', blogController);

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
/**
 * Controls all other Pages
 */
app.controller('PageCtrl', pageController);


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
var cartController=function($scope,productService){
    $scope.products = productService.getProducts();
    $scope.getCartPrice = function () {
        var total = 0;
        $scope.products.forEach(function (product) {
            total += product.unitPrice * 1;
        });
        return total;
    };

};

app.controller("LoginController",function ($scope, $location,  UserService){
    console.log("login called");
    $scope.login = function() {
        UserService.authenticate($.param({username: $scope.username, password: $scope.password}),
            function (authenticationResult) {
                var accessToken = authenticationResult.token;
                $location.path("/home");

            });
    };
});



app.constant("productListActiveClass", "btn-primary");
app.controller('productController', function ($scope, $http, $uibModal,productService,productListActiveClass) {
    $scope.cart = [];
    var selectedCategory = null;
    $scope.products = [];
    $scope.viewby = 5;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show
    $scope.test=function(){
        console.log("test call");
    };
    $scope.selectCategory = function (newCategory) {
        console.log("Called selectCategory");
        selectedCategory = newCategory;
    };
    $scope.categoryFilterFn = function (product) {
        return selectedCategory == null ||
            product.category == selectedCategory;
    };
    $scope.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
    }
    $http.get('/products')
        .then(function (response) {
            $scope.products = response.data;
        });
    $scope.pageChanged = function () {
        console.log('Page changed to: ' + $scope.currentPage);
    };
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.setItemsPerPage = function (num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page
    };
    $scope.addToCart = function (product) {
        var found = false;
        console.log("Products:" + product);
        $scope.cart.forEach(function (item) {
            if (item.id === product.id) {
                item.quantity++;
                found = true;
            }
        });
        if (!found) {
            $scope.cart.push(angular.extend({quantity: 1}, product));
            productService.addProduct(product);
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

});
app.controller('CheckoutCtrl', ['$scope', 'totalAmount', checkOutController]);
app.controller('CartController', ['$scope', 'productService', cartController]);

