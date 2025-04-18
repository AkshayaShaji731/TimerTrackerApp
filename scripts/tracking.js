import { createNavBar } from "../data/navbar.js";
import { displayList } from "../data/create-task-list.js";
createNavBar()

let dataArray = JSON.parse(localStorage.getItem('task')) || [];
displayList(dataArray)

