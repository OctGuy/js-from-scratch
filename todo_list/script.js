// Define task list
let todo = [];

// Define ul element to display task
let taskList = document.createElement('ol');
taskList.className = 'task_list';

document.querySelector('.add_btn').addEventListener('click', () => {
   const taskInput = document.querySelector('.todo_txtBox');
   const task = taskInput.value;

   //console.log(taskName);
   if (task) { // Not an empty string
      todo.push(task);
      displayTasks(task);
      taskInput.value = ''; // Clear textbox
   }
});

function displayTasks(task) {
   const listItem = document.createElement('li');
   listItem.className = 'task_name';
   listItem.textContent = task;

   // Create checkbox for task completion
   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';

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
   todo.splice(index, 1);
   console.log(todo);
}
