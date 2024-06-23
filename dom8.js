var a = document.querySelector("#full-screen");
var b = document.querySelector("#nav i ");
var c = document.querySelector("#part2");
var d = document.querySelector("#nav");


var check = 0;
b.addEventListener("click",function(){

    if(check == 0){
        a.style.top = "0%";
        check = 1;
        d.style.color = "white";
    }
   
    else {
        check = 0;
        a.style.top = "-100%";
        d.style.color = "black";
    }

})