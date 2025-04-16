import { createNavBar } from "../data/navbar.js"
import { taskNumber,taskName,taskDsecription,taskTag,taskDate,createActionBtn,createLS } from "../data/create-task-list.js"


const dateEl = document.querySelector(".date")
const taskBtn = document.querySelector('.add-task-btn')
const task = document.querySelector('.task-list-item')
// const taskContainer=document.querySelector('.main-container')
// const createBtn=document.querySelector('.task-create-btn')

let active = "active"


getDate()
createNavBar()

let dataArray = JSON.parse(localStorage.getItem('task')) || [];
displayList(taskNumber,taskName,taskDsecription,taskTag,taskDate,createActionBtn)

taskBtn.addEventListener('click', () => {
    createTask()
})

function getDate() {
    const date = new Date()
    dateEl.innerHTML = date.toDateString()
}


function createTask() {
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
           createTaskList(getName, getDescription, getTag,getDate)
        })
    }
    else {
        task.innerHTML = ""
        active = "active"
    }
}
function createTaskList(getName, getDescription, getTag,getDate){
    createLS(getName, getDescription, getTag,getDate)
    createTask()
}
function displayList(taskNumber,taskName,taskDsecription,taskTag,taskDate,createActionBtn){
    for (let i = 0; i < dataArray.length; i++) {
        let getDate = dataArray[i].date
        let getName = dataArray[i].name
        let getDescription = dataArray[i].description
        let getTag = dataArray[i].tag
        taskNumber();
        taskDate(getDate);
        taskDsecription(getDescription);
        taskName(getName)
        taskTag(getTag)
        createActionBtn()  
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
