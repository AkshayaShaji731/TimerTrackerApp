let dataArray = JSON.parse(localStorage.getItem('task')) || [];
export function createDayGraph() {
    let graphChart = document.getElementById("day-graph").getContext("2d");
    // console.log(graphChart)
    Chart.defaults.color = "  white "
    Chart.defaults.font.size = "16px"
  
    const chart = new Chart(graphChart, {
      type: "bar",
      data: {
        labels: day(),
        datasets: [{
          label: "week data ",
          data: daygraph(),
  
        }],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "weekly data",
            font: {
              size: 25,
            },
            color: "white"
          },
          tooltip: {
            enabled: false,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Dates",
              color: "white",
              font: {
                size: 25,
              }
            }
          },
          y: {
            title: {
              display: true,
              text: "Minutes",
              color: "white",
              font: {
                size: 25,
              }
            }
          }
        }
      }
    })
  }
  
  
  function day() {
    let array = []
    let currentDate = new Date().toISOString().split('T')[0];
    for (let i = 0; i < dataArray.length; i++) {
      let dateArray = dataArray[i].dateTotal
      for (let j = 0; j < dateArray.length; j++) {
        if (dateArray[j].date == currentDate) {
          array.push(dataArray[i].name)
        }
      }
    }
    // console.log(array)
    return array
  }
  
  
  function daygraph() {
    let array = []
    let currentDate = new Date().toISOString().split('T')[0];
    for (let i = 0; i < dataArray.length; i++) {
      let dateArray = dataArray[i].dateTotal
      for (let j = 0; j < dateArray.length; j++) {
        if (dateArray[j].date == currentDate) {
          let arrayEl = dateArray[j]
          let points = arrayEl.hour * 60 + arrayEl.minute + arrayEl.seconds / 60
          array.push(points)
        }
      }
    }
    // console.log(array)
    return array
  }