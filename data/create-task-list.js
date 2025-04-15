const displayTaskNo = document.querySelector('.task-num')
export const displayTaskName = document.querySelector('.task-name')
const displayTaskDesc = document.querySelector('.task-description')
const displayTaskTag = document.querySelector('.task-tag')
// const displayTask=document.querySelector('.display-task')
const displayBtn=document.querySelector('.task-btn')


let sNum = 1
export function taskNumber() {
    const taskNum = document.createElement("div")
    taskNum.classList.add("t-num")
    taskNum.innerHTML = sNum;
    sNum++
    displayTaskNo.appendChild(taskNum)
}

export function taskName(getName) {
    const name=getName.value
    const tName = document.createElement("div")
    tName.classList.add("t-name")
    tName.innerHTML = name
    displayTaskName.appendChild(tName)
    getName.value=""
}

export function taskDsecription(getDescription) {
    const desc=getDescription.value
    const taskDec = document.createElement("div")
    taskDec.classList.add('t-des')
    taskDec.innerHTML = desc
    displayTaskDesc.appendChild(taskDec)
    getDescription.value=""
}

export function taskTag(getTag) {
    const tag=getTag.value
    const tTag = document.createElement("div")
    tTag.classList.add("t-tag")
    tTag.innerHTML = tag
    displayTaskTag.appendChild(tTag)
    getTag.value=""
}
export function createActionBtn() {
    const taskBtn = document.createElement("div")

    taskBtn.innerHTML = `
         <button class="del-btn">delete</button>
         <button>edit</button>
         <button>select</button>
    `
    displayBtn.appendChild(taskBtn)

}