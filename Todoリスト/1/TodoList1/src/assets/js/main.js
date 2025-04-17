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
todoButton.addEventListener('click', () => {
  if (todoText.value !== "") {
    let newLi = document.createElement('li');
    newLi.textContent = todoText.value;

    toplist += 1;
    bottomlist += 1;

    top.textContent = toplist;
    bottom.textContent = bottomlist;
  } else {}
})