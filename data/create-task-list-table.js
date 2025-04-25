import { displayList } from "../scripts/home.js";
import { createlistMob } from "./create-task-list.js";
import { displayContent,timer,numberOfDays } from "./display-list-content.js";
const tableList = document.querySelector('table')
const task = document.querySelector('.task-list-item')
let dataArray = JSON.parse(localStorage.getItem('task')) || [];
const displaylistCon = document.querySelector('.display-content')
const days = document.querySelector('.days')
const timerCon = document.querySelector(".display-timer")
let completedArray=JSON.parse(localStorage.getItem('status')) || [];
console.log(completedArray)

// export function displayContent(time, name, desc, tag, date, index, enddate, status) {
//     displaylistCon.innerHTML = ` 
//        <table>
//          <tr>
//            <td>Start Date </td>
//            <td>:</td>
//            <td>${date}</td>
//          </tr>
//            <tr>
//            <td>End Date </td>
//            <td>:</td>
//            <td>${enddate}</td>
//          </tr>
//            <tr>
//            <td>Task Name </td>
//            <td>:</td>
//            <td>${name}</td>
//          </tr>
//            <tr>
//            <td> Description </td>
//            <td>:</td>
//            <td>${desc}</td>
//          </tr>
//            <tr>
//            <td>Tag </td>
//            <td>:</td>
//            <td>${tag}</td>
//          </tr>
//            <tr>
//            <td>Total Time </td>
//            <td>:</td>
//            <td>${time}</td>
//          </tr>
//          <tr>
//            <td>Status</td>
//            <td>:</td>
//            <td class="status-text">${status}</td>
//          </tr>
//        </table>
//        <button class="submit">Submit</button>`
//     let endDate
//     document.querySelector('.submit').addEventListener("click", () => {
//         document.querySelector(".status-text").innerText = "completed"
//         endDate = new Date().toISOString().split('T')[0];
//         dataArray[index].endDate = endDate
//         dataArray[index].status = "completed"
//         localStorage.setItem('task', JSON.stringify(dataArray));
//         for(let i=0;i<dataArray.length;i++){
//             let status=dataArray[i].status
//             if(status=="completed"){
//                 completedArray.push(dataArray[i])
//                 localStorage.setItem('status', JSON.stringify(completedArray));
//             }
//         }
//         console.log(dataArray)
//         render(dataArray)
//         //  window.location.reload()
//     })
//     if (status == "completed") {
//         document.querySelector('.submit').remove()
//         console.log("hlo")
//         // window.location.reload()
//         // document.querySelector('.display-timer').remove()

//     }
// }

// export function numberOfDays(numDays) {
//     if (numDays == "") {
//         days.innerHTML = `
//         <h3>0</h3>
//         <p>Number of days</p>`
//     }
//     else {
//         days.innerHTML = `
//         <h3>${numDays}</h3>
//         <p>Number of days</p>`
//     }

// }
// export function timer(index) {
//     timerCon.innerHTML = `
//     <p>TImer</p>
//    <div class="time-display-con">
//      <span class="d-hour">00:</span>
//      <span class="d-minute">00:</span>
//      <span class="d-second">00</span>
//    </div>
//    <div class="timer-display-btn"> 
//      <button id="d-start-btn">Start</button>
//      <button id="d-pause-btn">Pause</button>
//      <button id="d-stop-btn">Stop</button>
//    </div>`
    


//     let min = 0
//     let sec = 0
//     let hour = 0
//     var interval;
//     let pause = "true"
//     document.querySelector('#d-start-btn').addEventListener("click", () => {
//         clearInterval(interval)
//         interval = setInterval(startTime, 100)
//     })
//     document.querySelector('#d-pause-btn').addEventListener('click', () => {
//         if (pause == "true") {
//             clearInterval(interval)
//             pause = "false"
//         }
//         else {
//             interval = setInterval(startTime, 10)
//             pause = "true"
//         }

//     })
//     document.querySelector("#d-stop-btn").addEventListener("click", (e) => {
//         render(dataArray)
//         e.preventDefault()
//         clearInterval(interval)
//         let time = {
//             hour: hour,
//             min: min,
//             second: sec
//         }

//         let data = dataArray[index]

//         let taskTime = data.time
//         taskTime.push(time);
//         let totalTime = total(taskTime)
//         data.totalTaskTime = totalTime

//         localStorage.setItem('task', JSON.stringify(dataArray));
//         render(dataArray)

//         minute.innerHTML = "00:"
//         hours.innerHTML = "00:"
//         second.innerHTML = "00"

//         min = 0
//         sec = 0
//         hour = 0

//     })
//     let minute = document.querySelector('.d-minute')
//     let second = document.querySelector('.d-second')
//     let hours = document.querySelector('.d-hour')
//     function startTime() {
//         sec++
//         if (sec < 60) {
//             if (sec <= 9) {

//                 second.innerHTML = "0" + sec

//             }
//             else if (sec > 9) {
//                 second.innerHTML = sec
//             }
//         }
//         else if (sec > 60 && min < 59) {
//             min += 1
//             if (min <= 9) {
//                 minute.innerHTML = "0" + min + ":"
//             }
//             else {
//                 minute.innerHTML = min + ":"
//             }
//             sec = 0
//         }
//         else if (sec > 60 && min >= 59) {
//             hour += 1
//             if (hour <= 9) {
//                 hours.innerHTML = "0" + hour + ":"
//             }
//             else {
//                 hours.innerHTML = hour + ":"
//             }
//             sec = 0
//             min = 0
//         }
//     }

// }

export function createlist(getDate, getTag, getDescription, getName, sNum, i, getTime, getEndDate, getStatus) {
    // lap-top

    const taskRow = document.createElement("tr")
    taskRow.classList.add('taskrow')
    taskRow.innerHTML = `
     <td id="s-no">${sNum}</td>
     <td id="t-date">${getDate}</td>
     <td id="t-end-date">${getEndDate}</td>
     <td id="t-name">${getName}</td>
     <td id="t-desc">${getDescription}</td>
     <td id="t-tag">${getTag}</td>
     <td id="timer"></td>
     <td id="t-btn">
     <button class="delete-btn">Delete</button>
     <button class="edit-btn">edit</button>
     <button class="timer-btn">Timer</button>
     <div class="start-stop-btn"></div>
     </td>`
    tableList.appendChild(taskRow)

    if(getStatus=="completed"){

        taskRow.remove()

        let dataArray = JSON.parse(localStorage.getItem('task')) || [];
        dataArray.splice(i, 1);
        localStorage.setItem('task', JSON.stringify(dataArray));
        render(dataArray)
    }

    const deleteBtn = taskRow.querySelector('.delete-btn')
    const editBtn = taskRow.querySelector('.edit-btn')
    const timerEl = taskRow.querySelector('.timer-btn')
    const startStopBtn = taskRow.querySelector('.start-stop-btn')
    const displayTimer = taskRow.querySelector("#timer")
    if (getTime.hour == undefined || getTime.min == undefined || getTime.sec == undefined) {
        displayTimer.innerHTML = "00:00:00"
    }
    else {
        displayTimer.innerHTML = getTime.hour + ":" + getTime.min + ":" + getTime.sec
    }

    deleteBtn.addEventListener("click", (e) => {
        taskRow.remove()

        let dataArray = JSON.parse(localStorage.getItem('task')) || [];
        dataArray.splice(i, 1);
        localStorage.setItem('task', JSON.stringify(dataArray));
        render(dataArray)
    })

    editBtn.addEventListener("click", (e) => {
        let row = taskRow.children
        let index = (row[0].innerHTML) - 1
        let data = dataArray[index]

        let nameEl = data.name
        let descEl = data.description
        let tagEl = data.tag

        let nameInput = prompt("Enter the updated name:", nameEl);
        let descInput = prompt("Enter the updated decription:", descEl);
        let tagInput = prompt("Enter the updated tag:", tagEl);

        data.name = nameInput
        data.description = descInput
        data.tag = tagInput

        localStorage.setItem('task', JSON.stringify(dataArray));
        render(dataArray)
    })
    timerEl.addEventListener('click', (e) => {
        let row = taskRow.children
        let index = (row[0].innerHTML) - 1

        let time

        let timeobj = dataArray[index].totalTaskTime
        if (timeobj == '') {
            time = "00:00:00"
        }
        else {
            time = timeobj.hour + ":" + timeobj.min + ":" + timeobj.sec
        }

        let name = dataArray[index].name
        let desc = dataArray[index].description
        let tag = dataArray[index].tag
        let date = dataArray[index].date
        let status=dataArray[index].status
        let endDate=dataArray[index].endDate
        displayContent(time, name, desc, tag, date,endDate,status)

        // const day = 24 * 60 * 60 * 1000;
        // let today = new Date(enddate)
        // let taskdate = new Date(date)
        // let numDays = Math.round(Math.abs((today - taskdate) / day))
    //   let  numDays="0"
        // numberOfDays(numDays)

        timer(index, timeobj)

    })
}


export function createLS(getName, getDescription, getTag, getDate) {
    if (getDate.value == '' || getName.value == '') {
        alert("Enter the Date and Name")
    }
    else {
        let data = {
            name: getName.value,
            description: getDescription.value,
            tag: getTag.value,
            date: getDate.value,
            endDate: "",
            time: [],
            totalTaskTime: "",
            status: " Not Completed"

        }
        let dataArray = JSON.parse(localStorage.getItem('task')) || [];
        dataArray.push(data);

        localStorage.setItem('task', JSON.stringify(dataArray));
        dataArray = JSON.parse(localStorage.getItem('task') || [])
        render(dataArray)
    }
    getName.value = ""
    getDescription.value = ""
    getTag.value = ""
    getDate.value = ""
    window.location.reload()
}


export function render(dataArray) {
    tableList.innerHTML = `
     <tr>
              <th id="t-num">s.no</th>
              <th id="t-date">Start Date</th>
              <th id="t-date">End Date</th>
              <th id="t-name">TaskName</th>
              <th id="t-des">Task Description</th>
              <th id="t-tag">Task Tag</th>
              <th id="t-time">Time<th>  
              <th id="t-btn"></th>
            </tr>`
    displayList(dataArray)
}

export function total(data) {
    let array = data
    let totalHour = 0
    let totalMin = 0
    let totalSec = 0
    for (let i = 0; i < array.length; i++) {
        let timeArray = array[i]
        let timehour = timeArray.hour
        let timemin = timeArray.min
        let timeSec = timeArray.second
        totalHour += timehour
        totalMin += timemin
        totalSec += timeSec;

        if (totalSec >= 59) {
            totalMin += Math.floor(totalSec / 60)
            totalSec = totalSec % 60
        }
    
        if (totalMin >= 59) {
            totalHour += Math.floor(totalMin / 60)
            totalMin = totalMin % 60
        }
    }
    let totalTaskTIme
    if (totalHour <= 9) {
        totalHour = "0" + totalHour
    }
    if (totalMin <= 9) {
        totalMin = "0" + totalMin
    }
    if (totalSec <= 9) {
        totalSec = "0" + totalSec
    }

    totalTaskTIme = {
        hour: totalHour,
        min: totalMin,
        sec: totalSec
    }
    return totalTaskTIme
}
