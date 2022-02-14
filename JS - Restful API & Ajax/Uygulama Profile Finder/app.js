const profile = new Profile();
const ui = new UI();
const sourceProfile = document.querySelector('#sourceProfile');

sourceProfile.addEventListener('keyup', function(event){
    let text = event.target.value;
    ui.clear();

    if (text !== '') {
        profile.getProfile(text)
        .then((response) => {
            if (response.profile.length === 0) {
                ui.showAlert(text);
            }else{
                ui.showProfile(response.profile[0]);
                ui.showTodo(response.todo)
            }
        })
        .catch(err =>{
            ui.showAlert(text);
        })
    }
})