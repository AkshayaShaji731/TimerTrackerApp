const tableList = document.querySelector('table')
const task = document.querySelector('.task-list-item')
let dataArray = JSON.parse(localStorage.getItem('task')) || [];

function createlist(getDate, getTag, getDescription, getName, sNum, i, getTime) {
    const taskRow = document.createElement("tr")
    taskRow.innerHTML = `
     <td id="s-no">${sNum}</td>
     <td id="t-date">${getDate}</td>
     <td>---</td>
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

    deleteBtn.addEventListener("click", () => {
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
        document.querySelector(".stop-btn").addEventListener("click", () => {
            clearInterval(intervel)
            let time = {
                hour: hour,
                min: min,
                second: sec
            }

            let row = taskRow.children
            let index = (row[0].innerHTML) - 1
            let data = dataArray[index]

            let taskTime = data.time
            taskTime.push(time);
            let totalTime = total(taskTime)
            data.totalTaskTime = totalTime

            localStorage.setItem('task', JSON.stringify(dataArray));
            render(dataArray)

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
            time: [],
            totalTaskTime: ""

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
    // window.location.reload()
}


export function displayList(dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        let sNum = i + 1
        let getDate = dataArray[i].date
        let getName = dataArray[i].name
        let getDescription = dataArray[i].description
        let getTag = dataArray[i].tag

        let getTime = dataArray[i].totalTaskTime
        let timeArray = dataArray[i].time

        if (getDescription == '') {
            getDescription = "---"
        }
        else {
            getDescription = dataArray[i].description
        }
        if (getTag == '') {
            getTag = "--"
        }
        else {
            getTag = dataArray[i].tag

        }


        createlist(getDate, getTag, getDescription, getName, sNum, i, getTime)
    }
}


function render(dataArray) {
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

function total(data) {
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
        if (totalSec >= 60) {
            totalMin += Math.floor(totalSec / 60)
            totalSec = totalSec % 60
        }
        if (totalMin >= 60) {
            totalHour += Math.floor(totalMin / 60)
            totalMin = totalMin % 60
        }
    }
    let totalTaskTIme
    if(totalHour<=9){
        totalHour="0"+totalHour
    }
    if(totalMin<=9){
        totalMin="0"+totalMin
    }
    if(totalSec<=9){
        totalHour="0"+totalSec
    }
    
        totalTaskTIme = {
            hour: totalHour,
            min: totalMin,
            sec: totalSec
    }
    return totalTaskTIme
}
