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

const todoElements = () => {
  if (todoText.value !== "") {
    let li = document.createElement('li');

    let label = document.createElement('label');
    label.classList.add('todoItem');
    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    label.appendChild(input);
    let span = document.createElement('span');
    span.textContent = todoText.value;
    label.appendChild(span);

    li.appendChild(label);

    todoList.appendChild(li);
    todoText.value = "";

    toplist += 1;
    bottomlist += 1;

    top.textContent = toplist;
    bottom.textContent = bottomlist;

    lis.push(li);
  } else {}
}

const todoCount = () => {
  let input = document.querySelectorAll('.todoItem input');
  for (let i = 0; i < lis.length; i++) {
    console.log(lis);
    if (input.checked) {
      console.log(input[i]);
    }
  }
}

todoButton.addEventListener('click', () => {
  todoElements();
  todoCount();
})