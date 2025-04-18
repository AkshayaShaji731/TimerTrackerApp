const tableList = document.querySelector('table')
const task = document.querySelector('.task-list-item')

function createlist(getDate, getTag, getDescription, getName, sNum, i) {
    const taskRow = document.createElement("tr")
    taskRow.innerHTML = `
     <td id="s-no">${sNum}</td>
     <td id="t-date">${getDate}</td>
     <td>---</td>
     <td id="t-name">${getName}</td>
     <td id="t-desc">${getDescription}</td>
     <td id="t-tag">${getTag}</td>
     <td>
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

    deleteBtn.addEventListener("click", () => {
        taskRow.remove()

        let dataArray = JSON.parse(localStorage.getItem('task')) || [];
        dataArray.splice(i, 1);
        localStorage.setItem('task', JSON.stringify(dataArray));
    })

    editBtn.addEventListener("click", (e) => {
        let row=taskRow.children
        let nameEl=row[3]
        let descEl=row[4]
        let tagEl=row[5]


       let nameInput=  prompt("Enter the updated name:",nameEl.innerHTML);
       let descInput=  prompt("Enter the updated name:",descEl.innerHTML);
       let tagInput=  prompt("Enter the updated name:",tagEl.innerHTML);

       nameEl.innerHTML=nameInput
       descEl.innerHTML=descInput
       tagEl.innerHTML=tagInput

    })

    let taskTime=[]
    timerEl.addEventListener('click', (e) => {
        let active=true
        if(active==true){
             startStopBtn.style.display = "block"
        }
        startStopBtn.classList.add("start-stop-btn-cs")
        // let timers = document.createElement("div")

        startStopBtn.innerHTML = `
            <div class="display-time">

            <span class="hour">00:</span>
            <span class="minute">00:</span>
            <span class="second">00</span>

            </div>
            <button class="start-btn">Start</button>
            <button class="pause-btn">Pause</button>
            <button class="stop-btn">Stop</button>`

        // startStopBtn.appendChild(timers)

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
           let time={
                hour:hour,
                min:min,
                second:sec
            }
            taskTime.push(time)
            console.log(taskTime);
            // minute.innerHTML = "00:"
            // hours.innerHTML = "00:"
            // second.innerHTML = "00"
            active=false
            if(active==false){
                startStopBtn.style.display = "none"
                active=true
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
}


export function displayList(dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        let sNum = i + 1
        let getDate = dataArray[i].date
        let getName = dataArray[i].name
        let getDescription = dataArray[i].description
        let getTag = dataArray[i].tag

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

        createlist(getDate, getTag, getDescription, getName, sNum, i)
    }
}


function render(dataArray) {
    tableList.innerHTML = `
     <tr>
              <th>s.no</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>TaskName</th>
              <th>Task Description</th>
              <th>Task Tag</th>
              <th></th>
            </tr>`
    displayList(dataArray)
}