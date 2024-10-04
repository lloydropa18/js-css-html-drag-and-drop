
const taskContainer = document.querySelectorAll('.task-container');
const tasks = document.querySelectorAll('.task');

let taskDragged;


tasks.forEach(task => task.addEventListener('dragstart', dragStart));

taskContainer.forEach(taskContainer => {
    taskContainer.addEventListener('drop', dragDrop);
    taskContainer.addEventListener('dragover', (e) => e.preventDefault());
})

function dragStart(e) {
    taskDragged = e.target;
}

function dragDrop(e) {
    e.target.append(taskDragged);
}