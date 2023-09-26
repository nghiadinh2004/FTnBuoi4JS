const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', toggleTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.className = 'delete';

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}

function toggleTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    } else if (event.target.classList.contains('delete')) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
}
