/**
 * Created by nareshm on 6/11/2015.
 */
var productService=function() {
    var productList = [];

    var addProduct = function(product) {
        productList.push(product);
    };

    var getProducts = function(){
        return productList;
    };

    return {
        addProduct: addProduct,
        getProducts: getProducts
    };

};