var arr = document.querySelectorAll("h1");
var main = document.querySelector("main");



arr.forEach(function(elements){
    elements.addEventListener("mousemove",function(){
        elements.style.color = "crimson";
       elements.style.backgroundColor = "#000";
       elements.style.borderTop = "2px solid white";
       elements.style.borderBottom = "2px solid white";

    
    })



    elements.addEventListener("mouseleave",function(){
        elements.style.color = "white";
        elements.style.backgroundColor = "slategrey";
        elements.style.borderTop = "2px solid black";
        elements.style.borderBottom = "2px solid crimson";

    })
})