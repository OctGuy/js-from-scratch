// Define task list
let todo = [];

// Define ul element to display task
let taskList = document.createElement('ol');
taskList.className = 'task_list';

// Display completed task
let completedTaskList = document.createElement('ol');
completedTaskList.className = 'completed_task_list';

// 
let incompletedTaskList = document.createElement('ol');
incompletedTaskList.className = 'incompleted_task_list';

document.querySelector('.add_btn').addEventListener('click', () => {
   const taskInput = document.querySelector('.todo_txtBox');
   const task = taskInput.value;

   //console.log(taskName);
   if (task) { // Not an empty string
      const taskObj = {
         name: task,
         completed: false
      };
      todo.push(taskObj);
      displayTasks(taskObj);
      taskInput.value = ''; // Clear textbox
   }
});

function displayTasks(taskObj) {
   const listItem = document.createElement('li');
   listItem.className = 'task_name';
   listItem.textContent = taskObj.name;

   // Create checkbox for task completion
   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.checked = taskObj.completed;
   checkbox.addEventListener('change', () => {
      taskObj.completed = checkbox.checked;
   });

   // Create button for task remove
   const removeBtn = document.createElement('button');
   removeBtn.textContent = 'Remove';
   removeBtn.className = 'remove_btn';

   removeBtn.addEventListener('click', () => removeTask(listItem));

   listItem.appendChild(checkbox);
   listItem.appendChild(removeBtn);
   taskList.appendChild(listItem); // Push task into task list

   document.body.appendChild(taskList);
}

function removeTask(listItem) {
   taskList.removeChild(listItem);
   
   const index = todo.indexOf(listItem.textContent); // Get index of removed task
   todo.splice(index, 1);  // remove task
   //console.log(todo);

   showCompletedTasks(); // Update ul
   showIncompleteTasks();
}

// create a paragraph consisting header and its elements for each task type.
const completedBlock = document.createElement('p');
document.body.appendChild(completedBlock);
let completedTaskListHeading = document.createElement('h2');
completedTaskListHeading.textContent = 'Completed Task List';
completedBlock.appendChild(completedTaskListHeading);

const incompletedBlock = document.createElement('p');
document.body.appendChild(incompletedBlock);
let incompletedTaskListHeading = document.createElement('h2');
incompletedTaskListHeading.textContent = 'Incompleted Task List';
incompletedBlock.appendChild(incompletedTaskListHeading);

function showCompletedTasks() { 
   completedTaskList.innerHTML = ''; // Clear ul

   const completedTasks = todo.filter(task => task.completed);
   console.log(completedTasks);
   completedTasks.forEach(task => {
      const item = document.createElement('li');
      item.textContent = task.name;
      completedTaskList.appendChild(item);
   });

   completedBlock.appendChild(completedTaskList);
}

function showIncompleteTasks() {
   incompletedTaskList.innerHTML = ''; // Clear ul

   const incompletedTasks = todo.filter(task => !task.completed);
   console.log(incompletedTasks);
   incompletedTasks.forEach(task => {
      const item = document.createElement('li');
      item.textContent = task.name;
      incompletedTaskList.appendChild(item);
   });

   incompletedBlock.appendChild(incompletedTaskList);
}

document.querySelector('.completed_task_btn').addEventListener('click', showCompletedTasks);
document.querySelector('.incompleted_task_btn').addEventListener('click', showIncompleteTasks);