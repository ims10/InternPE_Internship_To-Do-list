// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');

  // Add task text
  taskItem.textContent = taskText;

  // Add complete task functionality
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
}

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
