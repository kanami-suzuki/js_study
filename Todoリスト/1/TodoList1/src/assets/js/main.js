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
  lis.push(li);
}
const todoCount = () => {
  toplist += 1;
  bottomlist += 1;

  top.textContent = toplist;
  bottom.textContent = bottomlist;
}
todoButton.addEventListener('click', () => {
  if (todoText.value !== "") {
    todoElements();
    todoCount();
    console.log(lis);
  } else {}
})
const todoItem = document.querySelector('.todoItem input');
todoItem.addEventListener('change', () => {
  if (document.querySelector('.todoItem')) {
    console.log(true);
  }
})
// for (let i = 0; i < todoinput.length; i++) {
//   if (todoinput[i].checked) {
//     console.log(todoinput[i]);
//   }
// }