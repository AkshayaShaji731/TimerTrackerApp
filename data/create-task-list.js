import { total } from "./create-task-list-table.js"; 
import { displayContent } from "./create-task-list-table.js";

const taskTable=document.querySelector(".display-task")
let dataArray = JSON.parse(localStorage.getItem('task')) || [];


export function createlistMob(getDate, getDescription, getName, sNum, i, getTime){
    const taskDiv=document.createElement("div");
    taskDiv.classList.add('task-div')
    taskDiv.innerHTML=`
    <div class="date-name">
      <h3>${sNum}.</h3> 
      <h3> ${getName}</h3>
        <p>${getDate}</p>
    </div>    
    <p>${getDescription}</p>
   <div class="btn-time">
    <div id="btn">
    <button class="delete-btn">Delete</button>
     <button class="edit-btn">edit</button>
     <button class="timer-btn">Timer</button>
     <div class="start-stop-btn"></div>
     </div>
     <p id="timer"></p>
    </div> `
    
    taskTable.appendChild(taskDiv)

    const deleteBtn = taskDiv.querySelector('.delete-btn')
    const editBtn = taskDiv.querySelector('.edit-btn')
    const timerEl = taskDiv.querySelector('.timer-btn')
    const startStopBtn = taskDiv.querySelector('.start-stop-btn')
    const displayTimer = taskDiv.querySelector("#timer")
    if (getTime.hour == undefined || getTime.min == undefined || getTime.sec == undefined) {
        displayTimer.innerHTML = "00:00:00"
    }
    else {
        displayTimer.innerHTML = getTime.hour + ":" + getTime.min + ":" + getTime.sec
    }

    deleteBtn.addEventListener("click", (e) => {
        taskDiv.remove()

        let dataArray = JSON.parse(localStorage.getItem('task')) || [];
        dataArray.splice(i, 1);
        localStorage.setItem('task', JSON.stringify(dataArray));
        renderMob(dataArray)
        
    })

    editBtn.addEventListener("click", (e) => {
        let index =sNum-1
        let data = dataArray[index]

        let nameEl = data.name
        let descEl = data.description


        let nameInput = prompt("Enter the updated name:", nameEl);
        let descInput = prompt("Enter the updated decription:", descEl);

        data.name = nameInput
        data.description = descInput

        localStorage.setItem('task', JSON.stringify(dataArray));
        renderMob(dataArray)
    })

    timerEl.addEventListener('click', (e) => {
        let index=sNum-1
          let time
      
              let timeobj=dataArray[index].totalTaskTime
              if(timeobj==''){
                  time="00:00:00"
              }
              else{
                   time=timeobj.hour+":"+timeobj.min+":"+timeobj.sec
              }
          
              let name=dataArray[index].name
              let desc=dataArray[index].description
              let tag=dataArray[index].tag
              let date=dataArray[index].date
              displayContent(time, name, desc, tag, date)
    
        let active = true
        if (active == true) {
            startStopBtn.style.display = "block"
        }
        startStopBtn.classList.add("start-stop-btn-cs")

        startStopBtn.innerHTML = `
            <div class="display-time">

            <span class="hour">00:</span>
            <span class="minute">00:</span>
            <span class="second">00</span>

            </div>
            <button class="start-btn">Start</button>
            <button class="pause-btn">Pause</button>
            <button class="stop-btn">Stop</button>`

        let min = 0
        let sec = 0
        let hour = 0
        var intervel;
        let pause = "true"

        document.querySelector('.start-btn').addEventListener("click", () => {
            clearInterval(intervel)
            intervel = setInterval(startTime, 100)
        })

        document.querySelector('.pause-btn').addEventListener('click', () => {
            if (pause == "true") {
                clearInterval(intervel)
                pause = "false"
            }
            else {
                intervel = setInterval(startTime, 10)
                pause = "true"
            }

        })
        document.querySelector(".stop-btn").addEventListener("click", (e) => {
            e.preventDefault()
            clearInterval(intervel)
            let time = {
                hour: hour,
                min: min,
                second: sec
            }

            // let row = taskRow.children
            // let index = (row[0].innerHTML) - 1
            let data = dataArray[index]
            // let row=sNum
            // console.log(row);

            let taskTime = data.time
            taskTime.push(time);
            // console.log(taskTime);
            let totalTime = total(taskTime)
            data.totalTaskTime = totalTime

            localStorage.setItem('task', JSON.stringify(dataArray));
            renderMob(dataArray)

            minute.innerHTML = "00:"
            hours.innerHTML = "00:"
            second.innerHTML = "00"

            active = false
            if (active == false) {
                startStopBtn.style.display = "block"
                active = true
            }

            min = 0
            sec = 0
            hour = 0

        })

        let minute = document.querySelector('.minute')
        let second = document.querySelector('.second')
        let hours = document.querySelector('.hour')
        function startTime() {
            sec++
            if (sec < 60) {
                if (sec <= 9) {

                    second.innerHTML = "0" + sec

                }
                else if (sec > 9) {
                    second.innerHTML = sec
                }
            }
            else if (sec > 60 && min < 59) {
                min += 1
                if (min <= 9) {
                    minute.innerHTML = "0" + min + ":"
                }
                else {
                    minute.innerHTML = min + ":"
                }
                sec = 0
            }
            else if (sec > 60 && min >= 59) {
                hour += 1
                if (hour <= 9) {
                    hours.innerHTML = "0" + hour + ":"
                }
                else {
                    hours.innerHTML = hour + ":"
                }
                sec = 0
                min = 0
            }
        }
    })
}
function renderMob(dataArray){
    taskTable.innerHTML=" "
    displayList(dataArray)
}