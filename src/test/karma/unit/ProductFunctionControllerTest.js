'use strict'

describe('ProductFunctionCtrl', function () {
    var $controllerConstructor, scope, httpBackend, http, uibModal, mockProducts;
    beforeEach(module("searchApp"));
    beforeEach(inject(function ($controller, $rootScope, $httpBackend, $http) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        http = $http;
        httpBackend = $httpBackend;
        httpBackend.when("GET", "/products").respond([{}, {}, {}]);
        mockProducts = sinon.stub({
            addProduct: function () {
            }
        });

    }));

    it('should get the products', function () {
        var mockProd = {};
        var ctrl = $controllerConstructor("productController", {
            $scope: scope,
            $http: http,
            productService: mockProducts
        });
        httpBackend.flush();

        var product = {id: 1};
        scope.addToCart(product);
        expect(mockProducts.calledOnce);
        console.log(scope.products.length);
        expect(scope.products.length).toEqual(3);
    });
});