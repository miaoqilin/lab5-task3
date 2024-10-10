document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = removeTask;
        taskList.appendChild(li);
    });
}

function addTask() {
    const task = document.getElementById('task').value;
    if (task === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = removeTask;
    taskList.appendChild(li);

    // Save to Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('task').value = '';
}

function removeTask(event) {
    const task = event.target.textContent;
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    event.target.remove();
}
