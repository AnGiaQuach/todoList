import "./style.css";
import {
  sendDataToDB,
  getDataFromDB,
  loadToDoList,
  createToDoCard,
} from "./operate.js";

import { newToDoFromUser } from "./form.js";

const id1 = self.crypto.randomUUID();
const id2 = self.crypto.randomUUID();
let arr = [
  { title: "helo", desc: "this is hello msg", id: id1 },
  { title: "do some thing ", desc: "hard thing!", id: id2 },
];
const mainBox = document.querySelector(".todo-container");
sendDataToDB("inbox", arr);
loadToDoList("inbox", mainBox);
newToDoFromUser();
