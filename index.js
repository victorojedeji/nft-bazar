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


