// Storage Controller
const StorageController = (function(){
    return {
        storeProduct : function(prd){
            let products;

            if (localStorage.getItem('products') == null) {
                
                products = [];

                products.push(prd);

            } else {

                products = JSON.parse(localStorage.getItem('products'));
                
                products.push(prd);

            }

            localStorage.setItem('products', JSON.stringify(products));

        },
        getProducts : function(){
            let products;

            if (localStorage.getItem('products') == null) {
                products = [];
            } else {
                products = JSON.parse(localStorage.getItem('products'));
            }

            return products;

        },
        updateProduct : function(product){
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach((item, index) => {
                
                if (item.id == product.id) {
                    products.splice(index, 1, product)
                }

                localStorage.setItem('products', JSON.stringify(products));

            });

        },
        deleteProduct(product){
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach((item, index) => {
                
                if (item.id == product.id) {
                    products.splice(index, 1);
                }

                localStorage.setItem('products', JSON.stringify(products));

            });

        }
    }
})();

// Product Controller
const ProductController = (function(){

    // Private

    const Product = function(id, name, price){
        this.id = id,
        this.name = name,
        this.price = price
    }

    const data = {
        products : StorageController.getProducts(),
        selectedProduct : null,
        totalPrice : 0
    }

    
    return {
        
        // public

        getProducts : function(){
            return data.products;
        },
        getData : function(){
            return data;
        },
        getProductById : function(id){
            let product = null;

            data.products.forEach(function(prd){
                if(prd.id == id){
                    product = prd;
                }
            })

            return product;
        },
        setCurrentProduct : function(product){
            data.selectedProduct = product;
        },
        getCurrentProduct : function(){
            return data.selectedProduct;
        },
        addProduct : function(name, price){
            let id;

            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1;
            }else{
                id = 1;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            
            data.products.push(newProduct);

            return newProduct;

        },
        updateProduct : function(name, price){
            let product = null;

            data.products.forEach(prd => {
                if (prd.id == data.selectedProduct.id) {
                    
                    prd.name = name;
                    prd.price = parseFloat(price);

                    product = prd;

                }
            });

            return product;
        },
        deleteProduct : function(prd){
            data.products.forEach((item, index) => {
                if (prd.id == item.id) {
                    data.products.splice(index, 1);
                }
            });
        },
        getTotal : function(){
            let total = 0;

            data.products.forEach(item => {
                total += item.price;
            })

            data.totalPrice = total;

            return data.totalPrice;

        }

    }

})();

// UI Controller
const UIController = (function(){

    const Selectors = {
        productList : '#item-list',
        productListItems : '#item-list tr',
        addButton : '.addBtn',
        updateButton : '.updateBtn',
        deleteButton : '.deleteBtn',
        cancelButton : '.cancelBtn',
        productName : '#productName',
        productPrice : '#productPrice',
        productCard : '#productCard',
        totalTL : '#total-tl',
        totalDolar : '#total-dolar'
    }

    return {
        creatProductList : function(products){

            let html = ``;

            products.forEach(prd => {
                html += `
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price}$</td>
                        <td class="text-end">
                            <i class="far fa-edit me-1 edit-product"></i>
                        </td>
                    </tr>
                `;
            });

            document.querySelector(Selectors.productList).innerHTML = html;

        },
        getSelectors : function(){
            return Selectors;
        },
        addProduct : function(prd){
            document.querySelector(Selectors.productCard).style.display = "block";

            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}$</td>
                    <td class="text-end">
                        <i class="far fa-edit me-1 edit-product"></i>
                    </td>
                </tr>
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs : function(){
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        clearWarning : function(){
            
            const items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {
                if(item.classList.contains('bg-warning')){
                    item.classList.remove('bg-warning')
                }
            });

        },
        hideCard : function(){

            const items = document.querySelectorAll(Selectors.productListItems);

            if (items.length == 0) {
                document.querySelector(Selectors.productCard).style.display = "none";
            }

        },
        showTotal : function(total){
            document.querySelector(Selectors.totalDolar).textContent = total.toFixed(1);
            document.querySelector(Selectors.totalTL).textContent = (total * 11.51).toFixed(1);
        },
        addCurrentProductToForm : function(){
            const selectedProduct = ProductController.getCurrentProduct();

            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        addingState : function(){

            UIController.clearWarning();
            UIController.clearInputs();

            document.querySelector(Selectors.addButton).style.display = 'inline';
            document.querySelector(Selectors.updateButton).style.display = 'none';
            document.querySelector(Selectors.deleteButton).style.display = 'none';
            document.querySelector(Selectors.cancelButton).style.display = 'none';

        },
        editState : function(tr){

            const parent = tr.parentNode;  
            
            for (let i = 0; i < parent.children.length; i++) {

                parent.children[i].classList.remove('bg-warning');
                
            }

            document.querySelector(Selectors.addButton).style.display = 'none';
            document.querySelector(Selectors.updateButton).style.display = 'inline';
            document.querySelector(Selectors.deleteButton).style.display = 'inline';
            document.querySelector(Selectors.cancelButton).style.display = 'inline';

            tr.classList.add('bg-warning');

        },
        updateProduct : function(prd){
            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(item => {
                if (item.classList.contains('bg-warning')) {

                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + '$';

                    updatedItem = item;

                }
            });

            return updatedItem;
        },
        deleteProduct(){

            const items = document.querySelectorAll(Selectors.productListItems);
            
            items.forEach(item => {
                if (item.classList.contains('bg-warning')) {
                    item.remove();
                }
            });

        }
    }

})();

// APP Controller
const App = (function(ProductCtrl, UICtrl, StorageCtrl){

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function(){
        // Add Product Event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);

        // Edit Product Click
        document.querySelector(UISelectors.productList).addEventListener('click', productEditClick);

        // Edit Product Submit
        document.querySelector(UISelectors.updateButton).addEventListener('click', editProductSubmit);

        // Cancel Button Click
        document.querySelector(UISelectors.cancelButton).addEventListener('click', cancelUpdate)

        // Delete Button Click
        document.querySelector(UISelectors.deleteButton).addEventListener('click', deleteProductSubmit)

    }

    const productAddSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            // Add Product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // Add Item To List
            UIController.addProduct(newProduct); 

            // Add Product To LS
            StorageCtrl.storeProduct(newProduct);

            // Clear Inputs
            UIController.clearInputs();

            // Get Total
            const total = ProductCtrl.getTotal();

            // Show Total
            UICtrl.showTotal(total);
        }

        e.preventDefault();

    }

    const productEditClick = function(e){

        if(e.target.classList.contains('edit-product')){

            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            // Get Selected Product
            const product = ProductCtrl.getProductById(id);

            // Set Current Product
            ProductCtrl.setCurrentProduct(product);

            // Add Product To UI
            UICtrl.addCurrentProductToForm();

            UICtrl.editState(e.target.parentNode.parentNode);

        }

        e.preventDefault();
    }

    const editProductSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {

            // Update Product
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            // Update UI
            const item = UICtrl.updateProduct(updatedProduct);

            // Get Total
            const total = ProductCtrl.getTotal();

            // Show Total
            UICtrl.showTotal(total);

            // Update Storage
            StorageCtrl.updateProduct(updatedProduct);

            UICtrl.addingState();

        }

        e.preventDefault();

    }

    const cancelUpdate = function(e){

        UIController.addingState();

        e.preventDefault();
    }

    const deleteProductSubmit = function(e){

        // Get Selected Product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        // Delete Product
        ProductCtrl.deleteProduct(selectedProduct);

        // Delete Product UI
        UICtrl.deleteProduct();

        // Get Total
        const total = ProductCtrl.getTotal();

        // Show Total
        UICtrl.showTotal(total);

        // Delete Product From LS
        StorageCtrl.deleteProduct(selectedProduct);
        
        UICtrl.addingState();

        UICtrl.hideCard();

        e.preventDefault();
    }

    return {
     
        init : function(){
            UICtrl.addingState();

            console.log(`Starting app..`);
            
            const products = ProductCtrl.getProducts();

            if(products.length == 0){
                UICtrl.hideCard();
            }else{
                UICtrl.creatProductList(products);
            }
            
            loadEventListeners();

        }
    
    }

})(ProductController, UIController, StorageController);

App.init();