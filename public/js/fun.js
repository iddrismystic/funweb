// funcss framework js MIT
const sidebarTrigger = document.querySelector('.sidebar-trigger');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
sidebarTrigger.addEventListener('click', ()=> sidebar.style.width = "250px")
closeSidebar.addEventListener('click', ()=> sidebar.style.width = "0px")
// accordion
const acc = document.getquerySelector('.accordion')
const accpanel = document.getquerySelector('.accordion panel')
acc.addEventListener('click' , (e)=>{
e.preventDefault()
alert("hello")
})

