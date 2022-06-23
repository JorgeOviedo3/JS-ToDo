const newTask = document.querySelector("#newtask");
const todoList = document.querySelector("#todo-list");

function newTodo() {
  const newLi = document.createElement("li");
  const newTaskText = newTask.value;
  newLi.innerText = newTaskText;
  const eraseButton = document.createElement("button");
  todoList.append(newLi);
  newLi.addEventListener("click", () => newLi.classList.toggle("done"));
  newLi.append(eraseButton);
  eraseButton.innerText = "-";
  eraseButton.classList.add("erasebutton");
  eraseButton.addEventListener("click", () => newLi.remove());
}
