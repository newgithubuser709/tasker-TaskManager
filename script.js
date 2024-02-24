  // Retrieve tasks from local storage or initialize an empty array
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Initial rendering
  renderTasks();
  // Function to render tasks
  function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
          const li = document.createElement('li');

          const textIt = document.createElement('p');
          li.appendChild(textIt);
          textIt.textContent = task;
          textIt.classList.add("textIt")

          const editButton = document.createElement('button');
          editButton.textContent = 'edit';
          editButton.onclick = () => editTask(index);
          editButton.classList.add("editButton")

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.onclick = () => deleteTask(index);
          deleteButton.classList.add("deleteButton")

          li.appendChild(editButton);
          li.appendChild(deleteButton);
          taskList.appendChild(li);
      });

      // Save tasks to local storage
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to add a new task
  function addTask() {
      const taskInput = document.getElementById('taskInput');
      const newTask = taskInput.value.trim();

      if (newTask !== "") {
          tasks.push(newTask);
          taskInput.value = "";
          renderTasks();
      }
  }


  // Function to delete a task
  function editTask(index) {
      const updatedTask = prompt('Edit task:', tasks[index]);

      if (updatedTask !== null) {
          tasks[index] = updatedTask.trim();
          renderTasks();
      }
  }

  // Function to delete a task
  function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
  }