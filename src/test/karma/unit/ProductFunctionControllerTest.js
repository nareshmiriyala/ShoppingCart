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
        uibModal = {
            // create a mock object using spies
            close: jasmine.createSpy('modalInstance.close'),
            dismiss: jasmine.createSpy('modalInstance.dismiss'),
            result: {
                then: jasmine.createSpy('modalInstance.result.then')
            }
        };

    }));

    it('should get the products', function () {
        var mockProd = {};
        var ctrl = $controllerConstructor("productController", {
            $scope: scope,
            $http: http,
            $uibModal: uibModal,
            productService: mockProducts
        });
        httpBackend.flush();

        var product = {id: 1};
        scope.addToCart(product);
        expect(mockProducts.calledOnce);
    });
});