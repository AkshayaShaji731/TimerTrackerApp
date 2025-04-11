import { createNavBar } from "../data/navbar.js"
const dateEl = document.querySelector(".date")
const navEl = document.querySelectorAll('.nav-tag')
// const navBar = document.querySelector('.nav-container')

function getDate() {
    const date = new Date()
    dateEl.innerHTML = date.toDateString()
}
getDate()
createNavBar()





































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
