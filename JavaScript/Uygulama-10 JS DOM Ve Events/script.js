//*UI vars
const form = document.querySelector('#addTaskForm');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

//*load item
loadItem();

//*call event listeners
eventListeners();

function eventListeners() {
    //*submit event
    form.addEventListener('submit', addNewItem);

    //*delete event
    taskList.addEventListener('click', deleteItem);

    //*delete all items
    btnDeleteAll.addEventListener('click', deleteAllItem);
};

function loadItem() {

    items = getItemsFromLS();

    items.forEach(function (item) {
        createItem(item);
    });
}

//*get items from Local Storage
function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = []
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

//
function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function name(item, index) {
       
       if (item === text) {
           items.splice(index, 1); 
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

//*add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
        return;
    }

    //*create item
    createItem(input.value)

    //*save to LS
    setItemToLS(input.value);

    //*clear input text
    input.value = '';

    e.preventDefault();
};

//*set item to local storage
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

//*create item
function createItem(text) {
    //*create tag li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));


    //*create tag a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class = "fas fa-times"></i>';

    //*add tag a to tag li
    li.appendChild(a);

    //*add tag li to tag ul
    taskList.appendChild(li);
}

//*delete item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();

        //*delete item from LS
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
    e.preventDefault();
}

//*all delete items
function deleteAllItem(e) {

    //taskList.innerHTML = '';

    if (confirm('Are you sure?')) {
        for (let i = 0; i < taskList.children.length; i) {
            taskList.children[i].remove();
        }
        localStorage.clear();
    }

    e.preventDefault();
}