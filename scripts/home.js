const dateEl = document.querySelector(".date")
const navEl = document.querySelectorAll('.nav-tag')
const navBar=document.querySelector('.nav-container')

getDate()
createNavBar()
function getDate() {
    const date = new Date()
    dateEl.innerHTML = date.toDateString()
}
function createNavBar(){
    const nav=`
    <div class="nav-inner-con">
            <div class="logo">
                <a href="../index.html">TimeTracker</a>
              </div>
              <nav>
                <ul class="nav-tag">
                  <li class="home"><a href="home.html">Home</a></li>
                  <li class="tracking"><a href="">Tracking Table</a></li>
                  <li class="summary"><a href="">Daily Summary</a></li>
                  <li class="history"><a href="">History</a></li>
                </ul>
              </nav>
        </div>
    `
    navBar.innerHTML=nav
}




































// function pageChange() {
//     navEl.forEach(e => {
//         const ulEl=e
//         const liTag = ulEl.childNodes
//         let li=[]
//         for (i = 0;i<liTag.length;i++){
//            if(i%2!=0){
//              li.push(liTag[i].className)
//            }
//         }
//         let liClassName=li

//     })
// }
// pageChange
