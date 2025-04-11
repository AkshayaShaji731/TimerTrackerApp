import { createNavBar } from "../data/navbar.js"
const dateEl = document.querySelector(".date")
const navEl = document.querySelectorAll('.nav-tag')
const taskBtn = document.querySelector('.add-task-btn')
const task=document.querySelector('.task-list-item')
const taskContainer=document.querySelector('.main-container')
getDate()
createNavBar()
function getDate() {
    const date = new Date()
    dateEl.innerHTML = date.toDateString()
}
taskBtn.addEventListener('click', () => {
    createTask()
})

function createTask() {
    task.innerHTML = `
          <label for="name">Enter your task</label>
          <input type="text" id="name" placeholder="Enter the task" class="name">
          <label for="decription">write Description</label>
          <input type="text" id="decription" placeholder="Description" class="description">
          <label for="tag">Give tag</label>
          <input type="text" id="tag" placeholder="tag" class="tag">
          <button class="task-create-btn">Create</button>` 
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
