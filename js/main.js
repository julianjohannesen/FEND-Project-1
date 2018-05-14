/*
TOGGLE HAMBURGER MENU
*/
const menu = document.querySelector(".hamburger a");
const drawer = document.getElementById("drawer");
menu.addEventListener("click", function(event){drawer.classList.toggle("open")}, false)

