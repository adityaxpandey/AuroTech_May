document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', manageTasks);

    function addTask(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-btn">✔️</button>
            <button class="delete-btn">❌</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function manageTasks(event) {
        if (event.target.classList.contains('complete-btn')) {
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle('completed');
        }

        if (event.target.classList.contains('delete-btn')) {
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    }
});
