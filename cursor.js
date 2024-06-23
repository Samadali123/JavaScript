
var h1 = document.querySelector("h1");
var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");


main.addEventListener("mousemove",function(val){
    cursor.style.left =   val.x + 20  +  "px";
    cursor.style.top =  val.y  + 20  +  "px";
    
})


h1.addEventListener("mouseenter",function(){
    cursor.style.scale  = "2.5";
    cursor.style.backgroundColor = "red";
    h1.style.fontWeight = "400";

})


h1.addEventListener("mouseleave",function(){
    cursor.style.scale = "1";
    cursor.style.backgroundColor = "white";
    h1.style.fontWeight = "700";

})










