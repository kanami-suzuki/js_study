console.log('Hello!');
let top = document.querySelector('#top');
let bottom = document.querySelector('#bottom');
const todoList = document.querySelector('.todoList');
const todoText = document.querySelector('#todoText');
const todoButton = document.querySelector('#todoButton');
const todoBottom = document.querySelector('#todoBottom');

let toplist = 0;
let bottomlist = 0;
let lis = []

const todo = () => {
  if (todoText.value !== "") {
    let li = document.createElement('li');
    li.classList.add('todoItem');
    li.textContent = todoText.value;
    let input = document.createElement('input')
    input.setAttribute("type", "checkbox");
    li.appendChild(input);

    toplist += 1;
    bottomlist += 1;

    todoList.appendChild(li);
    todoText.value = "";
    lis.push = li;

    top.textContent = toplist;
    bottom.textContent = bottomlist;
  } else {}
}

todoButton.addEventListener('click', () => {
  todo();
})