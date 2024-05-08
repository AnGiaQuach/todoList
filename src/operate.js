function sendDataToDB(key, obj) {
  let val = JSON.stringify(obj);
  localStorage.setItem(key, val);
}

function getDataFromDB(key) {
  let res = JSON.parse(localStorage.getItem(key));
  return res;
}

function removeToDoFromList(section, cardID) {
  let todoList = getDataFromDB(section);
  for (let i = 0; i < todoList.length; i++) {
    let { id } = todoList[i];
    if (id === cardID) {
      todoList.splice(i, 1);
      break;
    }
  }

  sendDataToDB(section, todoList);
}
function editCard(section, cardID, val) {
  let todoList = getDataFromDB(section);
  for (let i = 0; i < todoList.length; i++) {
    let { id } = todoList[i];
    if (id === cardID) {
      todoList.splice(i, 1, val);
      break;
    }
  }
  sendDataToDB(section, todoList);
}

function createToDoCard(data, section, mainBox) {
  console.log(data);
  console.log(section);
  const { title, desc } = data;
  console.log(title);
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");

  const descriptionBox = document.createElement("div");
  descriptionBox.classList.add("sm-light-title", "td-desc");
  descriptionBox.setAttribute("contenteditable", "true");
  const titleBox = document.createElement("div");
  titleBox.classList.add("md-bold-title", "td-title");
  titleBox.setAttribute("contenteditable", "true");

  const delIcon = document.createElement("div");
  delIcon.classList.add("icon-sb", "dlt-btn");
  delIcon.innerHTML = ` <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="white"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  />
</svg>`;
  delIcon.addEventListener("click", () => {
    const { id } = data;
    mainBox.removeChild(todoCard);
    removeToDoFromList(section, id);
  });

  titleBox.textContent = title;
  descriptionBox.textContent = desc;
  todoCard.appendChild(titleBox);
  todoCard.appendChild(descriptionBox);
  todoCard.appendChild(delIcon);

  titleBox.addEventListener("input", () => {
    console.log(titleBox.textContent);
    data.title = titleBox.textContent;
    editCard(section, data.id, data);
  });
  return todoCard;
}

function loadToDoList(section, mainBox) {
  let todoList = getDataFromDB(section);
  if (todoList === null) {
    todoList = [];
  }
  for (let i = 0; i < todoList.length; i++) {
    const tmpCard = createToDoCard(todoList[i], section, mainBox);

    mainBox.appendChild(tmpCard);
  }
}
export {
  sendDataToDB,
  getDataFromDB,
  loadToDoList,
  createToDoCard,
  editCard,
  removeToDoFromList,
};
