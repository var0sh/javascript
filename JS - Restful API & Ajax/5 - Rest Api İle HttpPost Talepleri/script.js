document.querySelector('#getOne').addEventListener('click', getOne);
document.querySelector('#getAll').addEventListener('click', getAll);
document.querySelector('#postData').addEventListener('click', postData);

function getOne(){
    var id = document.querySelector("#postid").value;
    var url = "https://jsonplaceholder.typicode.com/posts/" + id;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function(){

        if (this.status === 200) {
            var post = JSON.parse(this.responseText);
            var html = "";

            html += `
                    <div class="card mb-2">
                        <div class="card-header">
                            ${post.id}-${post.title}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <p> ${post.body}</p>                 
                            </blockquote>
                        </div>
                    </div>        
            `;

            document.querySelector('#results').innerHTML = html;

        }
        
    }

    xhr.send();
}

function getAll(){
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function(){

        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);

            var html = "";

            posts.forEach(post => {
                html += `
                        <div class="card mb-2">
                            <div class="card-header">
                                ${post.id}-${post.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                <p> ${post.body}</p>                 
                                </blockquote>
                            </div>
                        </div>        
                `;
            });

            document.querySelector('#results').innerHTML = html;

        }
        
    }

    xhr.send();

}

function postData(){
    const data = { // Bu ??ekil de server'a atamay??z (????nk?? obje), o y??zden bir text (string) haline getirip server'a atmal??y??z.
        userId : 1,
        title : 'new title',
        body : 'new body'
    }

    var json = JSON.stringify(data);
    var url = 'https://jsonplaceholder.typicode.com/posts';
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', url, true);
    
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // Server'a g??nderdi??imiz httprequest'e bir ba??l??k belirtmemiz gerekiyor. Yani a????klama gibi bir ??ey tip belirtiyoruz bu metot ile.
    xhr.onload = function(){
        
        if(xhr.status === 201 && xhr.readyState === 4){
            var post = JSON.parse(xhr.responseText);
            console.log(post);
        }
        
        // console.log(xhr.status); // output => 201 (created) => server'a bir ??ey post ederken, server'dan bir ??ey al??rken kulland??????m??z 200 yerine 201'i kullan??yoruz.
    };

    xhr.send(json);

}