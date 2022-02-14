const products = [
    {name : 'Tel 1', price : 1000},
    {name : 'Tel 2', price : 2000},
    {name : 'Tel 3', price : 3000}
];

var ProductController = (function(data){
    // private members

    var collections = data || []

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index >= 0){
            collections.splice(index, 1);
        }
    }

    const getProducts = function(){
        return collections
    }

    return {
        // public members

        addProduct,
        removeProduct,
        getProducts

    }

})(products)

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);
ProductController.addProduct(products[2]);
ProductController.removeProduct(products[0])

console.log(ProductController.getProducts());

// -----------------------------------------------------------------

// Module Extenting(genişletilmiş)

var extended = (function(module){

    module.sayHello = function(){
        console.log(`Hello from extended modele.`);
    }

    return module

})(ProductController || {})

extended.sayHello();
console.log(extended.getProducts());