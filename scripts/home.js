import { createNavBar } from "../data/navbar.js"
import {createLS ,displayList} from "../data/create-task-list.js"


const dateEl = document.querySelector(".date")
const taskBtn = document.querySelector('.add-task-btn')
const task = document.querySelector('.task-list-item')

let active = "active"


getDate()
createNavBar()

let dataArray = JSON.parse(localStorage.getItem('task')) || [];
displayList(dataArray)

taskBtn.addEventListener('click', () => {
    createTask()
})

function getDate() {
    const date = new Date()
    dateEl.innerHTML = date.toDateString()
}


export function createTask() {
    if (active == "active") {
        task.innerHTML = `
        <label for="date">Enter the Date</label>
        <input type="date" id="date" placeholder="Enter the date" class="date" >
        <label for="name">Enter your task</label>
        <input type="text" id="name" placeholder="Enter the task" class="name" required>
        <label for="decription">write Description</label>
        <input type="text" id="description" placeholder="Description" class="description">
        <label for="tag">Give tag</label>
        <input type="text" id="tag" placeholder="tag" class="tag">
        <button class="task-create-btn" >Create</button>`
        active = "inactive"

        const getDate = document.getElementById("date")
        const createBtn = document.querySelector('.task-create-btn')
        const getName = document.getElementById('name')
        const getDescription = document.getElementById('description')
        const getTag = document.getElementById('tag')

        createBtn.addEventListener('click', () => {
            createLS(getName, getDescription, getTag, getDate)
        })
    }
    else {
        task.innerHTML = ""
        active = "active"
    }
}

