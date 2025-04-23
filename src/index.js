document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = event.target["new-task-description"].value;

    buildToDo(taskDescription);
  });

  function buildToDo(task) {
    const taskList = document.querySelector("#tasks");
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.append(taskItem);
  }
});
