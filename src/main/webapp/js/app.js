/**
 * Main AngularJS Web Application
 */
var app = angular.module('searchApp', [
    'ngRoute', 'ui.bootstrap','exampleApp.services','customFilters'
]);

/**
 * Configure the Routes
 */
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
    // Home
        // Pages
        when("/", {templateUrl: "pages/login.html", controller: "LoginController"})
        .when("/login", {templateUrl: "pages/login.html", controller: "LoginController"})
        .when("/home", {templateUrl: "pages/home.html", controller: "LoginController"})
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
    $locationProvider.html5Mode(true);
});

/**
 * Services
 */
app.service('productService', productService);





