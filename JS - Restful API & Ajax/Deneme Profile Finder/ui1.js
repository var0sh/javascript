class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
            <div class="card-header">${profile.username}'s Profile</div>
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                    </div>
                    <div class="col-md-9">
                        <h4 class="mb-2">Profile</h4>
                        <ul class="list-group mb-4">
                            <li class="list-group-item">
                                Name : ${profile.name}
                            </li>
                            <li class="list-group-item">
                                User Name : ${profile.username}
                            </li>
                            <li class="list-group-item">
                                E-Mail : ${profile.email}
                            </li>
                            <li class="list-group-item">
                                Phone : ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                Address : ${profile.address.street} ${profile.address.suite} ${profile.address.city}
                            </li>
                            <li class="list-group-item">
                                Web Site : ${profile.website}
                            </li>
                            <li class="list-group-item">
                                Company : ${profile.company.catchPhrase}
                            </li>
                        </ul>
                    </div>
                </div>

                <hr class="border border-3 border-info">

                <div class="row">
                    <div class="col-md-12">
                        <div class="card-header">Todo List</div>
                        <div class="card card-body">
                            <ul id="todo"></ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found!`
    }

    showTodo(todo){
        let html = ``;

        todo.forEach(item => {
            if (item.completed) {
                html += `<li class="list-group-item bg-success">
                    ${item.title}
                </li>`
            }else{
                html += `<li class="list-group-item bg-secondary">
                    ${item.title}
                </li>`
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML = html;
    }

    clear(){
        this.alert.innerHTML = ``;
        this.profileContainer.innerHTML = ``;
    }

}