import { createNavBar, navBarMob } from "../data/navbar.js";
createNavBar()
navBarMob()
// import { listOfTime,numberOfDays } from "../data/display-list-content.js";


let dataArray = JSON.parse(localStorage.getItem('task')) || [];
let completedArray = JSON.parse(localStorage.getItem('status')) || [];

const tablePending = document.querySelector('.task-table-pending')
const tableCompleted=document.querySelector('.task-table-completed')
const displayPendingCon = document.querySelector('.display-pending')
const displayCompletedCon=document.querySelector('.display-completed')
const days = document.querySelector('.days')
const timerCon = document.querySelector(".display-timer")
const timeslist = document.querySelector(".times")
let display = "active"
displayTracking()
function displayTracking() {
    for (let i = 0; i < dataArray.length; i++) {
        let sNum = i + 1
        let getDate = dataArray[i].date
        let getName = dataArray[i].name
        let getTime = dataArray[i].totalTaskTime
        let endDate = dataArray[i].endDate
        let getDescription = dataArray[i].description
        let getStatus = dataArray[i].status
        let getTag = dataArray[i].tag
        if (endDate == undefined) {
            endDate = "--"
        }
        else {
            endDate = dataArray[i].endDate
        }
        let time
        if (getTime == '') {
            time = "00:00:00"
        }
        else {
            time = getTime.hour + ":" + getTime.min + ":" + getTime.sec
        }
        document.querySelector(".display-pending-con").style.display = "none"
        pendingTask(sNum, getDate, getName, endDate, getTime, getDescription, getTag, getStatus, time)
    }
    for (let i = 0; i < completedArray.length; i++) {
        let sNum = i + 1
        let getDate = completedArray[i].date
        let getName = completedArray[i].name
        let getTime = completedArray[i].totalTaskTime
        let endDate = completedArray[i].endDate
        let getDescription = completedArray[i].description
        let getStatus = completedArray[i].status
        let getTag = completedArray[i].tag
        if (endDate == undefined) {
            endDate = "--"
        }
        else {
            endDate = completedArray[i].endDate
        }
        let time
        if (getTime == '') {
            time = "00:00:00"
        }
        else {
            time = getTime.hour + ":" + getTime.min + ":" + getTime.sec
        }
        document.querySelector(".display-completed-con").style.display = "none"
        completedTask(sNum, getDate, getName, endDate, getTime, getDescription, getTag, getStatus, time)
    }
}

function pendingTask(sNum, getDate, getName, endDate, getTime, getDescription, getTag, getStatus, time) {
    const taskRow = document.createElement("tr")
    taskRow.innerHTML = `
     <td id="s-no">${sNum}</td>
     <td id="t-date">${getDate}</td>
     <td id="t-name">${getName}</td>
     <td id="t-desc">${endDate}</td>
     <td id="timer"></td>
     <td id="t-btn">
     <button class="details">Details</button>
     </td>
   `
    tablePending.appendChild(taskRow)
    const displayTimer = taskRow.querySelector("#timer")
    if (getTime.hour == undefined || getTime.min == undefined || getTime.sec == undefined) {
        displayTimer.innerHTML = "00:00:00"
    }
    else {
        displayTimer.innerHTML = getTime.hour + ":" + getTime.min + ":" + getTime.sec
    }
    taskRow.querySelector(".details").addEventListener("click", () => {

        document.querySelector(".display-pending-con").style.display = "block"
        displayContentTrack(sNum, getDate, getName, endDate, time, getDescription, getTag, getStatus,displayPendingCon)
    }
    )

}
function completedTask(sNum, getDate, getName, endDate, getTime, getDescription, getTag, getStatus, time){
    const taskRow = document.createElement("tr")
    taskRow.innerHTML = `
     <td id="s-no">${sNum}</td>
     <td id="t-date">${getDate}</td>
     <td id="t-name">${getName}</td>
     <td id="t-desc">${endDate}</td>
     <td id="timer"></td>
     <td id="t-btn">
     <button class="details">Details</button>
     </td>
   `
    tableCompleted.appendChild(taskRow)
    const displayTimer = taskRow.querySelector("#timer")
    if (getTime.hour == undefined || getTime.min == undefined || getTime.sec == undefined) {
        displayTimer.innerHTML = "00:00:00"
    }
    else {
        displayTimer.innerHTML = getTime.hour + ":" + getTime.min + ":" + getTime.sec
    }
    taskRow.querySelector(".details").addEventListener("click", () => {

        document.querySelector(".display-completed-con").style.display = "block"
        displayContentTrack(sNum, getDate, getName, endDate, time, getDescription, getTag, getStatus,displayCompletedCon)
    }
    )

}

function displayContentTrack(index, date, name, enddate, time, desc, tag, status,displayHTML) {
    displayHTML.innerHTML = ` 
      <h3>Task details</h3>
       <table>
         <tr>
           <td>Start Date </td>
           <td>:</td>
           <td>${date}</td>
         </tr>
           <tr>
           <td>End Date </td>
           <td>:</td>
           <td>${enddate}</td>
         </tr>
           <tr>
           <td>Task Name </td>
           <td>:</td>
           <td>${name}</td>
         </tr>
           <tr>
           <td> Description </td>
           <td>:</td>
           <td>${desc}</td>
         </tr>
           <tr>
           <td>Tag </td>
           <td>:</td>
           <td>${tag}</td>
         </tr>
           <tr>
           <td>Total Time </td>
           <td>:</td>
           <td>${time}</td>
         </tr>
         <tr>
           <td>Status</td>
           <td>:</td>
           <td class="status-text">${status}</td>
         </tr>
       </table>`
}

