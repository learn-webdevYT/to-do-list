let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

if (window.localStorage.getItem("todos") == undefined) {
    let todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

let save = window.localStorage.getItem("todos");
let todos = JSON.parse(save);

addToDoButton.addEventListener('click', function () {

    if (inputField.value != "") {
        createItem(inputField.value);
        todos.push(inputField.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputField.value = "";
    }
    else if (!inputField.value || inputField.value.trim() == "") {
        alert("Invalid Input");
        return;
    }

});

function createItem(name) {

    let divElement = document.createElement('div');
    divElement.classList.add('item');

    // text
    let input = document.createElement('input');
    input.classList.add('paragraph-styling');
    input.setAttribute('style', 'color: grey');
    input.disabled = true;
    input.value = name;

    // Remove button
    let button = document.createElement('button');
    button.classList.add('remove');
    button.type = 'button';
    button.innerHTML = 'REMOVE';
    button.addEventListener('click', function () {
        toDoContainer.removeChild(divElement);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    });

    //Edit Button
    let editbutton = document.createElement('button');
    editbutton.classList.add('edit');
    editbutton.type = 'button';
    editbutton.innerHTML = 'EDIT';
    editbutton.addEventListener('click', function () {

        if (input.disabled == true) {
            input.disabled = !input.disabled;
        }
        else {
            input.disabled = !input.disabled;
        }
        let indexOf = todos.indexOf(name);
        todos[indexOf] = input.value;
        window.localStorage.setItem("todos", JSON.stringify(todos));
    });

    // add to div element
    toDoContainer.appendChild(divElement);
    divElement.appendChild(input);
    divElement.appendChild(button);
    divElement.appendChild(editbutton);
}

for (let i = 0; i < todos.length; i++) {
    createItem(todos[i]);
}