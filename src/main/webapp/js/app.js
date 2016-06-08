
/**
 * Main AngularJS Web Application
 */
var app = angular.module('searchApp', [
    'ngRoute','ui.bootstrap'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "pages/about.html", controller: "PageCtrl"})
        .when("/faq", {templateUrl: "pages/faq.html", controller: "PageCtrl"})
        .when("/products", {templateUrl: "pages/products.html", controller: "productController"})
        .when("/services", {templateUrl: "pages/services.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "pages/contact.html", controller: "PageCtrl"})
        // Blog
        .when("/blog", {templateUrl: "pages/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "pages/blog_item.html", controller: "BlogCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);

/**
 * Services
 */
app.service('productService',productService);
/**
 * Controls the Blog
 */
app.controller('BlogCtrl', blogController);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', pageController);

app.controller('productController', ['$scope','$http','$uibModal','productService', productFunction]);
app.controller('CheckoutCtrl',['$scope', 'totalAmount',checkOutController]);
app.controller('CartController',['$scope', 'productService',cartController]);



