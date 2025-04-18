const tableList=document.querySelector('table')
function createlist(getDate,getTag,getDescription,getName,sNum,i){
    const taskRow=document.createElement("tr")
    taskRow.innerHTML=`
     <td>${sNum}</td>
     <td>${getDate}</td>
     <td>---</td>
     <td>${getName}</td>
     <td>${getDescription}</td>
     <td>${getTag}</td>
     <td>
     <button class="delete-btn">Delete</button>
     <button>edit</button>
     <button>Timer</button>
     </td>`
    tableList.appendChild(taskRow)
    const deleteBtn=taskRow.querySelector('.delete-btn')
    deleteBtn.addEventListener("click",(e)=>{
       taskRow.remove()

       let dataArray = JSON.parse(localStorage.getItem('task')) || [];
        dataArray.splice(i, 1); 
        localStorage.setItem('task', JSON.stringify(dataArray));
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

        if(getDescription==''){
            getDescription="---"
        }
        else{
         getDescription = dataArray[i].description
        }
        if(getTag==''){
            getTag="--"
        }
        else{
            getTag = dataArray[i].tag

        }

         createlist(getDate,getTag,getDescription,getName,sNum,i)
    }
}
function render(dataArray){
    tableList.innerHTML=`
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