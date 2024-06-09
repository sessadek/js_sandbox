// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].getAttribute('src');


// let scripts = document.scripts;
// scripts = Array.from(scripts);
// scripts.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });

// val = document.images;

// console.log(val);

// let taskTitle;
// taskTitle = document.getElementById('task-title');
// taskTitle = document.getElementById('task-title').id;
// taskTitle = document.getElementById('task-title').className;
// console.log(taskTitle);

// taskTitle.style.background = 'blue';
// taskTitle.style.color = 'red';
// taskTitle.textContent = 'New Title';
// taskTitle.innerText = 'New Title 2';
// taskTitle.innerHTML = '<span style="color:green;">New Title 2</span>';

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'red';

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


// let lis = document.getElementsByTagName('li');

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//     li.textContent = `${index} : Hello`;
// });
// console.log(lis);


// let items = document.querySelectorAll('ul li');

// items.forEach(function(li, index) {
//     li.textContent = `${index} : Hello`;
// });
// console.log(items);

// let liOdd = document.querySelectorAll('ul li:nth-child(odd)');
// let liEven = document.querySelectorAll('ul li:nth-child(even)');

// liOdd.forEach(function(li, index) {
//     li.style.background = 'red';
// });

// liEven.forEach(function(li, index) {
//     li.style.background = 'blue';
// });


// for(i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = 'blue';
// }

// console.log(liOdd);
// console.log(liEven);


// let val;

// const list = document.querySelector('.collection');
// const listItem = document.querySelector('.collection-item:first-child');

// val = listItem;
// val = list;

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;

// val = list.children;
// val = list.children[0];
// // list.children[3].children.id = 'test';
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = listItem.parentNode;
// val = listItem.parentElement;

// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// val = listItem.nextElementSibling.nextElementSibling;

// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// const li = document.createElement('li');

// li.className = 'collection-item';
// li.id = 'new-id';

// li.setAttribute('title', 'new title');

// const text = document.createTextNode('Hello');
// li.append(text);

// const link = document.createElement('a');

// link.className = 'delete-item secondary-content';
// link.href = '#';

// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);

// document.querySelector('ul.collection').append(li);
// console.log(li);


// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// const oldHeading = document.getElementById('task-title');

// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading);

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();

// list.removeChild(lis[3]);
// console.log(oldHeading);
// console.log(newHeading);
// console.log(cardAction);

// const firstLi = document.querySelector('li:first-child');
// link = firstLi.children[0];
// let val;
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;


// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// link.removeAttribute('title');
// val = link.hasAttribute('title');
// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//     e.preventDefault();
//     let val;
//     val = e;
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     val = e.type;
//     val = e.timeStamp;

//     val = e.clientX;
//     val = e.clientY;
//     val = e.offsetX;
//     val = e.offsetY;
//     console.log(val);
// });


// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);


// function runEvent(e) {
//     console.log(`Type Event : ${e.type}`);
//     heading.textContent = `MouseX : ${e.clientX}, MouseY : ${e.clientY}`;
//     document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, 40)`;
// }

// const form = document.querySelector('form');
// const input = document.querySelector('#task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// console.log(select);
// input.value = '';
// // input.addEventListener('keydown', runEvent);
// input.addEventListener('keyup', runEvent);
// input.addEventListener('keypress', runEvent);
// input.addEventListener('focus', runEvent);
// input.addEventListener('blur', runEvent);
// input.addEventListener('cut', runEvent);
// input.addEventListener('paste', runEvent);
// select.addEventListener('change', runEvent);

// function runEvent(e) {
//     console.log(e.type);
//     console.log(e.target.value);
//     heading.innerText = e.target.value;
//     e.preventDefault();
// }



// const cardTitle = document.querySelector('.card-title');

// cardTitle.addEventListener('click', function() {
//     console.log('card title');
// });

// const cardContent = document.querySelector('.card-content');

// cardContent.addEventListener('click', function() {
//     console.log('card content');
// });

// const card = document.querySelector('.card');

// card.addEventListener('click', function() {
//     console.log('card');
// });

// const col = document.querySelector('.col');

// col.addEventListener('click', function() {
//     console.log('col');
// });


// document.querySelector('.delete-item').addEventListener('click', function() {
//     console.log('delete item');
// });

// document.body.addEventListener('click', function(e) {
//     // console.log(e.target);
//     if(e.target.parentElement.classList.contains('delete-item')) {
//         e.target.parentElement.parentElement.remove();
//     }
//     e.preventDefault();
    
// });


// localStorage.setItem('name', 'John');

// sessionStorage.setItem('name', 'beth');


// localStorage.removeItem('name');

// localStorage.clear();
// console.log(localStorage.getItem('name'));

document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.querySelector('#task').value;
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    e.preventDefault();
});


const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log(tasks);
tasks.forEach(function(task) {
    console.log(task);
});