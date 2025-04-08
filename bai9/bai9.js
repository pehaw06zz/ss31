let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: false },
    { id: 3, task: 'Meet george', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
  ];
  
  window.onload = function () {
    todoList.forEach(item => createTaskElement(item.task, item.completed));
  };

  function createTaskElement(task, isCompleted) {
    const li = document.createElement("li");
    li.textContent = task;
    if (isCompleted) {
      li.classList.add("checked");
    }
  
    li.onclick = function () {
      li.classList.toggle("checked");
    };
    const span = document.createElement("span");
    span.textContent = "x";
    span.className = "close";
    span.onclick = function () {
      li.remove();
    };
    li.appendChild(span);
    document.getElementById("myUL").appendChild(li);
  }
  function addTask() {
    const input = document.getElementById("myInput");
    const task = input.value.trim();
    if (task === "") {
      alert("Vui lòng nhập task!");
      return;
    }
    const newTask = {
      id: todoList.length + 1,
      task: task,
      completed: false
    };
    todoList.push(newTask);
    createTaskElement(newTask.task, newTask.completed);
    input.value = "";
  }
  
