// funcss framework js MIT
const sidebarTrigger = document.querySelector('.sidebar-trigger');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
if(sidebar != undefined || sidebarTrigger != undefined || closeSidebar != undefined){
sidebarTrigger.addEventListener('click', ()=> sidebar.style.width = "250px")
closeSidebar.addEventListener('click', ()=> sidebar.style.width = "0px")
}
// accordion

jQuery(document).ready(function(){
const accordion = $('.accordion')
if(accordion != undefined){
accordion.on('click', '.accordion-control', function(e){
e.preventDefault(); //prevent default action of a button 
$(this) //get the element the user clicked on
.next('.accordion-panel') //select the next accordion panel
.not(':animated') //if it is not currently animating
.slideToggle(); //use slideToggle to show or hide it
})
}
})

