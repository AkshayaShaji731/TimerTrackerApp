import { createNavBar,navBarMob} from "../data/navbar.js";
import { createWeekGraph } from "../data/graph.js";
createNavBar()
navBarMob()
createWeekGraph()
const mainCont = document.querySelector(".main-container")
// let arrays=[]
let dataArray = JSON.parse(localStorage.getItem('task')) || [];
console.log(dataArray);

const date = new Date().toISOString().split('T')[0]

for (let i = 0; i < dataArray.length; i++) {
    
    if(date==dataArray[i].date){
        let taskCon = document.createElement("div")
    taskCon.classList.add("task")
    let time="00:00:00"
    if( dataArray[i].totalTaskTime==""){
       time="00:00:00"
       console.log(time);
    }
    else{
        time=dataArray[i].totalTaskTime.hour+":"+dataArray[i].totalTaskTime.min+":"+dataArray[i].totalTaskTime.sec
    }
    taskCon.innerHTML = `
      <h3>${dataArray[i].name}</h3>
      <p>${dataArray[i].description}</p>
      <p>Total Time:${time}</p>
          `
     mainCont.appendChild(taskCon)
    }
}
 