const ui = new UI();
const profile = new Profile();
const sourceProfile = document.querySelector('#sourceProfile');

sourceProfile.addEventListener('keyup', event => {
    
    ui.clear();
    let text = event.target.value;
    
    if (text !== '') {
        profile.getProfile(text)
        .then(res => {
            if (res.profile.length === 0) {
                ui.showAlert(text)
            }else{
                ui.showProfile(res.profile[0])
                ui.showTodo(res.todo);
            }
        })
        .catch(err => {
            ui.showAlert(text);
        })
    }
})