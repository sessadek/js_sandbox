const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');


// Load event Listener

loadEventListeners();

function loadEventListeners() {
    //DOM Load Event

    document.addEventListener('DOMContentLoaded', getTasks);

    // add Task
    form.addEventListener('submit', addTask);

    // remove Task
    taskList.addEventListener('click', removeTask);

    // clear Tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter Task
    filter.addEventListener('keyup', filterTask);
}

// get Tasks

function getTasks() {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);

        taskList.appendChild(li);
    });
}

function addTask(e) {

    if(taskInput.value === '') {
        alert('add Task');
    }

    const li = document.createElement('li');


    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    // Store in LS

    storeTaskInLocalStorage(taskInput.value)

    // Clear Input
    taskInput.value = '';

    e.preventDefault();
}


function storeTaskInLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you Sure ?')) {
            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
}

// removeTaskFromLocalStorage

function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index) {
        
        if(task === taskItem.textContent) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// clear Tasks
function clearTasks(e) {
    // taskList.innerHTML = '';

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // clear from LS

    clearTasksFromLocalStorage();
    filter.value = '';

    e.preventDefault();
}

 // clear from LS

function clearTasksFromLocalStorage() {
    localStorage.clear();
}
// Filter Task

function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent.toLowerCase();
        if(item.indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}