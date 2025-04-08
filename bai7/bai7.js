
let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet george', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
  ];
  window.onload = function () {
    for (let item of todoList) {
      createTaskElement(item.task, item.completed);
    }
  };
  function newElement() {
    const input = document.getElementById("myInput");
    const inputValue = input.value.trim();
  
    if (inputValue === '') {
      alert("Vui lòng nhập task!");
      return;
    }
    createTaskElement(inputValue, false);
    input.value = "";
  }
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
    span.textContent = "X";
    span.className = "close";
    span.onclick = function () {
      li.remove();
    };
  
    li.appendChild(span);
    document.getElementById("myUL").appendChild(li);
  }
  