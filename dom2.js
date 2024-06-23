
var bulb = document.querySelector("#circle");
var btn = document.querySelector("button");
var main = document.querySelector("#main");



var check = 0;

btn.addEventListener("click",function(){
    if(check == 0)
    {
        bulb.style.backgroundColor = "yellow";
        bulb.style.border = "2px solid black";
        btn.style.backgroundColor = "none";
        main.style.backgroundColor = "white";
        check = 1;

    }


    else {
        bulb.style.backgroundColor = "orangered";
        bulb.style.border = "2px solid white";
        btn.style.backgroundColor = "black";
        btn.style.border = "2px solid white";
        main.style.backgroundColor = "black";
        btn.style.color = "white";
        check = 0;
    }
})
    







