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
let added = false;

function addProduct(prd, callback){
    
    if(added){
        setTimeout(() =>{
            products.push(prd);
            callback(null, prd);
        }, 2000)
    }else{
        callback('500', prd)
    }

}

function getProduct(){
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        })
    }, 1000)
}

addProduct({
    id : 4,
    name : 'Tel 4',
    price : 4000
}, function(err, data){
    if(err){
        console.log(`hata ${err}`);
    }else{
        console.log(data);
    }
})