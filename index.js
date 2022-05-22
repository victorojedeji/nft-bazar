// toggle menu
var nav = document.getElementById("nav-container");
var open_btn = document.getElementById("open-btn");
open_btn.onclick= function(){
nav.style.width = "200px";
};

var close_btn = document.getElementById("close-btn");
close_btn.onclick= function(){
nav.style.width= "0px"
};


// let nav = selectElement("#nav-container");
// let toggle = selectElement(".icons");
// let body = selectElement("body");

// function selectElement(element) {
//     return document.querySelector(element);
// } 


// toggle.onclick = function(){
//     console.log("ive been clicked");
// };


// function selectElement(element) {
//     return document.querySelector(element);
// }

// let toggle = selectElement('.icons');
// let body = selectElement("body");

// toggle.addEventListener('click', function (){
//     body.classList.toggle('open');
// });