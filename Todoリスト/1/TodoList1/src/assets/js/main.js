console.log('Hello!');
let top = document.querySelector('#top');
let bottom = document.querySelector('#bottom');
const todoList = document.querySelector('.todoList');
const todoText = document.querySelector('#todoText');
const todoButton = document.querySelector('#todoButton');
const todoBottom = document.querySelector('#todoBottom');

top = 0;
bottom = 0;
todoButton.addEventListener('click', () => {
  let newLi = document.createElement('li');
  newLi.textContent = todoText.value;

  todoList.appendChild(newLi);
  todoText.value = "";
  top = top++;
  bottom = bottom++;
})