var main = document.querySelector("#main");
var button = document.querySelector("button");

var  box = document.querySelector("#box");
var  progress = document.querySelector("#progress");

var grow = 0;
button.addEventListener("click",function(){
setInterval(function(){
    if(grow < 100 ){
        grow++;
        progress.style.width =  grow + "%";
        button.style.backgroundColor = "white";
        button.style.color = "#000";
    }


    else{
        clearInterval();
        progress.style.width = "0%";
        grow = 0;
    }


}, 50)
})