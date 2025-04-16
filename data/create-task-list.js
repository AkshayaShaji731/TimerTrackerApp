const displayTaskNo = document.querySelector('.task-num')
const displayTaskName = document.querySelector('.task-name')
const displayTaskDesc = document.querySelector('.task-description')
const displayTaskTag = document.querySelector('.task-tag')
// const displayTask=document.querySelector('.display-task')
const displayBtn = document.querySelector('.task-btn')


export function createTasklist(getName, getDescription, getTag) {
    if (getName.value == '') {
        alert("Please enter the Task Name")
    }
    else {
        taskNumber();
        taskName(getName)
        taskDsecription(getDescription)
        taskTag(getTag)
        createActionBtn()
    }
}

let sNum = 1
 function taskNumber() {
    const taskNum = document.createElement("div")
    taskNum.classList.add("t-num")
    taskNum.innerHTML = sNum;
    sNum++
    displayTaskNo.appendChild(taskNum)
}


 function taskName(getName) {
    const name = getName.value
    const tName = document.createElement("div")
    tName.classList.add("t-name")
    tName.innerHTML = name
    displayTaskName.appendChild(tName)
    getName.value = ""
}

 function taskDsecription(getDescription) {
    const desc = getDescription.value
    if (desc == '') {
        const taskDec = document.createElement("div")
        taskDec.classList.add('t-des')
        taskDec.innerHTML = "--"
        displayTaskDesc.appendChild(taskDec)
    }
    else {
        const taskDec = document.createElement("div")
        taskDec.classList.add('t-des')
        taskDec.innerHTML = desc
        displayTaskDesc.appendChild(taskDec)
    }
    getDescription.value = ""
}

 function taskTag(getTag) {
    const tag = getTag.value
    if (tag == '') {
        const tTag = document.createElement("div")
        tTag.classList.add("t-tag")
        tTag.innerHTML = "--"
        displayTaskTag.appendChild(tTag)
    }
    else {
        {
            const tTag = document.createElement("div")
            tTag.classList.add("t-tag")
            tTag.innerHTML = tag
            displayTaskTag.appendChild(tTag)
        }
    }
    getTag.value = ""
}
 function createActionBtn() {
    const taskBtn = document.createElement("div")

    taskBtn.innerHTML = `
         <button class="del-btn">delete</button>
         <button>edit</button>
        <button class="timer">Timer</button>
         <div class="start-stop-btn"></div>
    `
    displayBtn.appendChild(taskBtn)


    const timerEl = document.querySelector('.timer')
    const startStopBtn = document.querySelector('.start-stop-btn')

    timerEl.addEventListener('click', () => {
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
            minute.innerHTML = "00:"
            hours.innerHTML = "00:"
            second.innerHTML = "00"
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