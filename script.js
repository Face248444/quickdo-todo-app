function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const ulDoing = document.getElementById("taskList");
  const ulDone = document.getElementById("doneList");

  const li = document.createElement("li");

  const checkSpan = document.createElement("span");
  checkSpan.className = "bi bi-square";
  checkSpan.id = "check-box";

  const textNode = document.createTextNode(" " + taskText + " ");

  const trashSpan = document.createElement("span");
  trashSpan.className = "bi bi-trash";
  trashSpan.id = "trash";

  trashSpan.addEventListener("click", function () {
    li.remove();
  });

  checkSpan.addEventListener("click", function () {
    if (li.parentElement === ulDoing) {
      checkSpan.classList.replace("bi-square", "bi-check-square");
      ulDoing.removeChild(li);
      ulDone.appendChild(li);
    } else {
      checkSpan.classList.replace("bi-check-square", "bi-square");
      ulDone.removeChild(li);
      ulDoing.appendChild(li);
    }
  });

  li.appendChild(checkSpan);
  li.appendChild(textNode);
  li.appendChild(trashSpan);

  ulDoing.appendChild(li);
  taskInput.value = "";
}
