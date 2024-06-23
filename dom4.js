var box = document.querySelector("#box");
var btn = document.querySelector("button");


btn.addEventListener("click",function(){

    var a = Math.floor(Math.random( ) * 255 );
    var b = Math.floor(Math.random( ) * 255 );
    var c = Math.floor(Math.random( ) * 255 );
    
    box.style.backgroundColor = ` rgb(${a} , ${b} , ${c} ) `
    // box.style.scale = "1.2";
    box.style.borderRadius = "50%";
    btn.style.color = ` rgb(${a} , ${b} , ${c} )`

});


