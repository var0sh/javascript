// async function fn(){
//     return 'hello'
// }

// fn()
// .then(res => {
//     console.log(res);
// })

// console.log(fn());

var isError = true;

function getCategory(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if(!isError){
                resolve('phone');
            }else{
                reject('Error')
            }
        }, 1000);
    });
}

function getProducts(category){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`5 products in ${category}`)   
        }, 1000);
    })
}

// getCategory()
// .then(getProducts)
// .then(res => console.log(res))
// .catch(err => {
//     console.log(err);
// })


// async, await;

async function getProduct(){
    
    try {
        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

getProduct();