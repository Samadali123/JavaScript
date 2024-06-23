

var like = document.querySelector("#icons #part1 #like");
var heart = document.querySelector("#post  h3");
var post = document.querySelector("#card #post");


post.addEventListener("dblclick", function(){
    gsap.to("#post h3", {
        scale:2,
        ease:Expo,
    })

    like.style.color   = "red";
    setTimeout(function(){
        gsap.to("#post h3", {
            scale:0,
            opacity: 0,
        })

        
        like.style.color   = "black";
    }, 1000)


})


