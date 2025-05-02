let dataArray = JSON.parse(localStorage.getItem('task')) || [];

export function createWeekGraph() {
  let graphChart = document.getElementById("day-graph").getContext("2d");
  // console.log(graphChart)


  const chart = new Chart(graphChart, {
    type: "bar",
    data: {
      labels: week(),
      datasets: [{
        label: "week data ",
        data: graph(),
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "weekly data",
          font: {
            size: 25,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "dates"
          }
        },
        y: {
          title: {
            display: true,
            text: "minutes"
          }
        }
      }
    }
  })
}


function week() {
  let curr = new Date
  let week = []

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }
  // console.log(week)

  return week
}
function graph() {
  let graphObj = {
    date: "",
    time: ""
  }
  let dateArray = []
  let min
  let sec
  let hour
  let total = {
    hour: 0,
    minute: 0,
    seconds: 0
  }
  let graphData = []
  // console.log(dataArray)

  for (let i = 0; i < dataArray.length; i++) {
    let demodate = dataArray[i].currentDate
    let uniq = [...new Set(demodate)]
    dateArray.push(...uniq)
    dateArray = [...new Set(dateArray)]

  }

  for (let d = 0; d < dateArray.length; d++) {
    for (let k = 0; k < dataArray.length; k++) {

      let dayTotal = dataArray[k].dateTotal

      for (let j = 0; j < dayTotal.length; j++) {
        let task = dayTotal[j];
        // let demo = dayTotal[j]
        if (task.date == dateArray[d]) {
          hour = task.hour;
          min = task.minute;
          sec = task.seconds;
          total.hour += hour;
          total.minute += min;
          total.seconds += sec;
          if (total.seconds >= 60) {
            total.minute += Math.floor(total.seconds / 60);
            total.seconds = total.seconds % 60;
          }

          if (total.minute >= 60) {
            total.hour += Math.floor(total.minute / 60);
            total.minute = total.minute % 60;
          }
        }
      }
      graphObj.date = dateArray[d]
      graphObj.time = total
    }
    graphData.push(graphObj)
    graphObj = {
      date: "",
      time: ""
    }
    total = {
      hour: 0,
      minute: 0,
      seconds: 0
    }
  }
  let weekArray = week()
  let totalSec
  // console.log(graphData)
  let graphPoints = []
  let pointedData = []
  for (let l = 0; l < weekArray.length; l++) {
    for (let m = 0; m < graphData.length; m++) {
      if (weekArray[l] == graphData[m].date) {
        let points = graphData[m].time
        let hour = points.hour*60
        let min = points.minute
        let sec = points.seconds/60
        totalSec = hour + min + sec
        break
      }
      else {
        totalSec = 0
        continue
      }
    }
    graphPoints.push(totalSec)
  }
  // console.log(graphPoints)
  return graphPoints
}