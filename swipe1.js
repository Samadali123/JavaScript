
var swiperight = document.querySelector("#main #swipe-right");
var swipeleft = document.querySelector("#main #swipe-left");
var main  = document.querySelector("#main");


var swiping = 0;
swipeleft.addEventListener("click", function(){
     swiping += 500;
     main.scrollTo(swiping, 0);
})

swiperight.addEventListener("click", function(){
    swiping -= 500;
    main.scrollTo(swiping, 0);
})





