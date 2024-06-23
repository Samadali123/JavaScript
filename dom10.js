var main  = document.querySelector("#main");
var h1 = document.querySelector("h1");
var button = document.querySelector("button");


var a = false;
button.addEventListener("click",function(){
    
    h1.innerHTML = "requesting..."
    h1.style.color = "royalblue";
    if(a == false){
        setTimeout(function(){
            h1.innerHTML = "Friends"
            h1.style.color = "royalblue";
            button.innerHTML = "remove friend";
           a = true
           button.style.backgroundColor = "royalblue"
        },2000)
         button.style.cursor = "pointer";
         main.style.backgroundColor = "#000";
        
    }


    else {
        h1.innerHTML = "sameera ali";
        button.innerHTML  ="Send request";
        a = false
        h1.style.color = "#000";
        main.style.backgroundColor = "#fff";
    }
})