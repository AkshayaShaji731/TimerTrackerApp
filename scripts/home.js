import { createNavBar } from "../data/navbar.js"
import { taskName, taskNumber, taskDsecription, taskTag, createActionBtn, createTasklist } from "../data/create-task-list.js"


const dateEl = document.querySelector(".date")
const taskBtn = document.querySelector('.add-task-btn')
const task = document.querySelector('.task-list-item')
// const taskContainer=document.querySelector('.main-container')
// const createBtn=document.querySelector('.task-create-btn')

let active = "active"


getDate()
createNavBar()

taskBtn.addEventListener('click', () => {
    createTask()
})

// function createBtn(){
//     taskNumber()
//     taskName()
//     taskDsecription()
//     taskTag()
//     onclick="createBtn()
//     createActionBtn()
// }

function getDate() {
    const date = new Date()
    dateEl.innerHTML = date.toDateString()
}


function createTask() {
    if (active == "active") {
        task.innerHTML = `
        <label for="name">Enter your task</label>
        <input type="text" id="name" placeholder="Enter the task" class="name" required>
        <label for="decription">write Description</label>
        <input type="text" id="description" placeholder="Description" class="description">
        <label for="tag">Give tag</label>
        <input type="text" id="tag" placeholder="tag" class="tag">
        <button class="task-create-btn" >Create</button>`
        active = "inactive"

        
        const createBtn = document.querySelector('.task-create-btn')
        const getName = document.getElementById('name')
        const getDescription = document.getElementById('description')
        const getTag = document.getElementById('tag')
        const checkName = getDate.value

        createBtn.addEventListener('click', () => {
            createTasklist(getName, getDescription, getTag)
        })
    }
    else {
        task.innerHTML = ""
        active = "active"
    }
}






































// function pageChange() {
//     navEl.forEach(e => {
//         const ulEl=e
//         const liTag = ulEl.childNodes
//         let li=[]
//         for (i = 0;i<liTag.length;i++){
//            if(i%2!=0){
//              li.push(liTag[i].className)
//            }
//         }
//         let liClassName=li

//     })
// }
// pageChange
