var products = [
    {
        id : 1, 
        name : 'Tel 1',
        price : 1000
    },
    {
        id : 2, 
        name : 'Tel 2',
        price : 2000
    },
    {
        id : 3, 
        name : 'Tel 3',
        price : 3000
    }
]

function addProduct(prd, callback){
    
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            products.push(prd);
            let added = true;

            if (added) {
                resolve();
            }else{
                reject('Hata: 500');
            }
        })
    })

}

function getProduct(){
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        })
    }, 1000)
}

addProduct({id : 4, name : 'Tel 4', price : 4000}).then(getProduct).catch(function(err){
    console.log(err);
})