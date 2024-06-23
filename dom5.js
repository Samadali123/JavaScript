var a =  document.querySelector("#first");
var b =  document.querySelector("#second");
var c =  document.querySelector("#third");



var check = 0;

b.addEventListener("click",function(){
    if(check == 0){
        b.style.opacity = "0";
        a.style.rotate = "35deg";
        c.style.rotate = "-35deg";
        a.style.transition = "all 0.3s ease ";
        b.style.transition = "all 0.3s ease ";
        c.style.transition = "all 0.3s ease ";
        a.style.backgroundColor = "cyan";
        b.style.backgroundColor = "cyan";
        c.style.backgroundColor = "cyan";
    
       check = 1;

    }



    else {
        check = 0;
        b.style.opacity = "1";
        a.style.rotate = "0deg";
        c.style.rotate = "0deg";
        a.style.backgroundColor = "bisque";
        b.style.backgroundColor = "bisque";
        c.style.backgroundColor = "bisque";
    }

})
