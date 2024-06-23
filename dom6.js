var box = document.querySelector("#box");
var img  = document.querySelector("img");

box.addEventListener("dblclick",function(){
    box.style.backgroundColor   = "salmon";
})
box.addEventListener("mouseenter",function(){
    box.style.backgroundColor   = "red";
    box.style.rotate = "45deg";

})


box.addEventListener("mousemove",function(){
  

    var a = Math.floor(Math.random( ) * 255 );
    var b = Math.floor(Math.random( ) * 255 );
    var c = Math.floor(Math.random( ) * 255 );
    
    box.style.backgroundColor = ` rgb(${a} , ${b} , ${c} ) `
    box.style.border  = "2px solid white"
    box.style.opacity = "0.8";

    
})



box.addEventListener("mouseleave",function(){
    box.style.backgroundColor = "blue";
    box.style.rotate = "0deg";

})















