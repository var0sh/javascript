// var p = new Promise(function(resolve, reject){
//     if (true) {
//         resolve('success');
//     }else{
//         reject('failure')
//     }
// });

// p
// .then(function(data){console.log(data);})
// .catch((err) => {console.log(err);})

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(5);
//     }, 1000);
// })
// .then(number => {console.log(number); return number * number})
// .then(number => {console.log(number); return number * number})
// .then(number => {console.log(number);})

const isMomHappy = true;

const willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        const phone = {
            name : 'Tel',
            price : '1000',
            color : 'Red'
        }
        resolve(phone)
    }else{
        const error = new Error('mom is not happy');
        reject(error);
    }
});

const showToFriends = function(phone){
    const message = ('He friends this is my new phone ' + phone.name)
    
    return Promise.resolve(message);
}

const askMom = function(){
    willGetNewPhone
    .then(showToFriends)
    .then(message => console.log(message))
    .catch(err => console.log(err))
}

askMom();