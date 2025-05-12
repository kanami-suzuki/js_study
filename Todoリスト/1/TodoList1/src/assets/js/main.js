console.log('Hello!');
let top = document.querySelector('#top');
let bottom = document.querySelector('#bottom');
const todoList = document.querySelector('.todoList');
const todoText = document.querySelector('#todoText');
const todoButton = document.querySelector('#todoButton');
const todoBottom = document.querySelector('#todoBottom');

let toplist = 0;
let bottomlist = 0;
let lis = [];

const todoElements = () => {
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

  input.addEventListener('change', () => {
    const unchecked = lis.filter(item => !item.checked);
    top.textContent = unchecked.length;
  });

  return input;
}

todoButton.addEventListener('click', () => {
  if (todoText.value !== "") {
    const newInput = todoElements();
    lis.push(newInput);

    top.textContent = lis.filter(item => !item.checked).length;;
    bottom.textContent = lis.length;
    console.log(lis);
  } else {}
})