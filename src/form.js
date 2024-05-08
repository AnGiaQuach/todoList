import {
  sendDataToDB,
  getDataFromDB,
  loadToDoList,
  createToDoCard,
  editCard,
  removeToDoFromList,
} from "./operate.js";

function newToDoFromUser(section, mainBox) {
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
    const id = self.crypto.randomUUID();
    const todoData = {
      id: id,
      title: titleInput.value,
      desc: description.value,
    };
    let todoList = getDataFromDB("inbox");
    todoList.push(todoData);
    sendDataToDB("inbox", todoList);
    mainBox.appendChild(createToDoCard(todoData, section, mainBox));

    newTaskBox.classList.toggle("vanish");
  });
}

export { newToDoFromUser };
