var   btn1  = document.querySelector("#b1");
var btn2  =  document.querySelector("#b2");


var check = 0;

btn1.addEventListener("click",function(){
    if(check == 0){
             
    btn1.innerHTML = "Following"
    btn1.style.color = "white";
    btn1.style.backgroundColor = "#666";
    btn2.innerHTML = "Send message";
    check = 1;
    }


    else {
        btn1.innerHTML = "Follow";
        btn1.style.backgroundColor = "royalblue";
        btn1.style.color = "white";
        btn2.innerHTML = "Message";
        check = 0;

    }
})



var flag  = 0;

var photo = document.querySelectorAll(".photo");


photo.forEach(function(elem){
    elem.addEventListener("click",function(){
    
        if(flag == 0){
            elem.style.width = "300px";
        elem.style.height = "300px";
        elem.style.objectFit = "cover";
        elem.style.objectPosition = "center";
        elem.style.transition = " 0.3s  ease";
     
        flag = 1;
        }
        else{
            elem.style.width = "95px";
            elem.style.height = "95px";
            flag = 0;
        }
    })
})













