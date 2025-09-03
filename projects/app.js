let burgur = document.querySelector(".menu");
let lines = document.querySelector(".line");
let navlinks = document.querySelector(".site-nav");
let links = document.querySelectorAll(".site-nav li");

burgur.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
    lines.classList.toggle("trans");


});
