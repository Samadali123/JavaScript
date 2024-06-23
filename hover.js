  var cursor  = document.querySelector("#cursor")
 var elems = document.querySelectorAll("#main .elem");
 

 window.addEventListener("mousemove", function(dets){
       cursor.style.left    = dets.x + "px"
       cursor.style.top    = dets.y + "px"

 })


 elems.forEach(function(elem){
      elem.addEventListener('mouseenter', function(dets){
            elem.childNodes[3].style.opacity = 1;
            elem.childNodes[3].style.scale  = 1.2;
      })


      elem.addEventListener("mousemove", function(dets){
          elem.childNodes[3].style.left = dets.x + "px"
          elem.childNodes[3].style.top  = dets.y + "px"
    
      })

      elem.addEventListener("mouseleave", function(dets){
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].style.scale  = 1;
      })
 })



