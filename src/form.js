import {
  sendDataToDB,
  getDataFromDB,
  loadToDoList,
  createToDoCard,
  editCard,
  removeToDoFromList,
} from "./operate.js";

function newToDoFromUser() {
  const newTaskBtn = document.querySelector(".new-task-icon");
  const newTaskBox = document.querySelector(".new-task-box");
  const titleInput = document.querySelector("#title");
  const description = document.querySelector("#description");

  const saveBtn = document.querySelector("#save");
  newTaskBtn.addEventListener("click", () => {
    newTaskBox.classList.toggle("vanish");
  });
  saveBtn.addEventListener("click", () => {
    event.preventDefault();

    console.log(titleInput.value);
    console.log(description.value);
    newTaskBox.classList.toggle("vanish");
  });
}

export { newToDoFromUser };
