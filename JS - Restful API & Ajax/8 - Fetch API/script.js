// ES6 ile beraber gelen Fetch API sayesin de artık bir fonksiyon da Promise döndürmemize gerek kalmıyor.

// Text
function getText(){
    fetch('text.txt')
    .then(response => {
        return response.text()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}


// getText();

// JSON
function getJSON(){    
    fetch('products.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}

// getJSON()


// External API
function getExternalAPI(){
    fetch('https://randomuser.me/api/?results=5')
    .then(data => {
        return data.json()
    })
    .then(users => {
        var html = "";
        users.results.forEach(user => {
            html += `
                <div>
                    <img src="${user.picture.medium}">
                    <div>${user.name.first} ${user.name.last}</div>
                </div>
            `
        });
        document.querySelector('#users').innerHTML = html;
    })
    .catch(err => {
        console.log(err);
    })
}

// getExternalAPI();


function postExternalAPI(){
    const url = `https://jsonplaceholder.typicode.com/todos/`;

    var data = {
        method : "POST",
        body: JSON.stringify({
            userId : 1, 
            title : "sample title", 
            body : "sample body"
        }), 
        headers : new Headers({
            'content-type' : 'application/json'
        })}

    fetch(url, data)
    .then(response => {
        console.log(response);
    })
}