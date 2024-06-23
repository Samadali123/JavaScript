// dom use hota js ki help achhee achhe features banane ke liye logics seee

// dom ke andar 4 cheezen hoti hai :
// element selction
// html change
// html text chnage 
// css change
// eveent listener..


// element selection : 3 methods se krkste query by id by class.
 var a = document.querySelector("h1");
var b = document.getElementById("box");
var c = document.getElementsByClassName("content");



// changing html :
a.innerHTML= "contentttttttt";
// b.textContent = " <p>hccc cdc dcdcdc dcdbc </p>";
b.innerHTML =  "<h1>helooooooo</h1>";



// changing css
a.style.fontSize = "100px ";
a.style.textAlign = "center";
b.style.backgroundColor = "deeppink";
c.style.backgroundColor = "yellow";



// Event listener :
a.addEventListener("click", function(){
    a.style.color  = "black";
})




