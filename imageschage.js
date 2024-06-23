var img  = document.querySelector("#loader img");


var allimages  = [
    "https://images.unsplash.com/photo-1692764619881-0c41dcdbab2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",


    "https://plus.unsplash.com/premium_photo-1692340973236-e4617a167ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    "https://images.unsplash.com/photo-1692555331534-47b8c0061803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    "https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    "https://images.unsplash.com/photo-1691856630890-9270899274a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",


    "https://images.unsplash.com/photo-1687360440155-81bdb9ecd713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",


    "https://plus.unsplash.com/premium_photo-1692340973390-ed4a319f129d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

    "https://images.unsplash.com/photo-1692423018159-1820c667b1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",


]

var index = 1;
setInterval(function(){
    img.setAttribute("src", allimages[index]);
   index++;
} , 200)


gsap.to("#loader",{
    y:"-100vh",
    delay:1.5,
})