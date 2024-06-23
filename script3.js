
// // conditionals in javascipt: if, else ,else if.

// conditionals woh statemenst hoti hai jo kisi conditions pe dependd krti hai 
// jisme yah toh true hogi condition yah false yah use true or false me convert krenge !

// ek bar ek hi condition chalegi yah toh true or yah toh false !

if(12>12){
    console.log("me true huuu dost !");
}

else {
    console.log("me false hoo dost !");
}


// yah toh condition check hoke if else chalega yah khud direct true yah false value de skte ho !


if(true){
    console.log("hod ki .......");
}

else{
    console.log("dcjdcjdcbdbcdcd")

}




// conditons me teen cheezein homgi yah toh true hogi yah false or yah truthy or falsi me convert hogi !

// truthy or falsy woh conditions hoti jo na hi true hoti hai na hi false hiti hai 
/// pr usko uske truthy or falsy nature se uskeo true yah false bata skte hai 


if("dcdcdc"){
    console.log("dcjdcbd");
}

// falsy nature vali values : null undefined  document.all , NaN 0 "" inko chod ke sab truthy natire ki hoti hai !


if(0){
    console.log("me true hoo");
}

else{
    console.log("me false hoo !");
}




if(""){
    console.log("me bhi falsy hoo broooo");
}

else{
    console.log("nahi hoo !");

}


// == and === in js!


let a = 12;
let b = 12;
if(a == b){
    console.log("yes it is true ");
}

else{
    console.log("false statemnet !");

}




let s = 10;
let m  = "10";
if(s == m){
    console.log("sahi hai");
}

else{
    console.log("galat jawab !");

}


// == bas valeu check krta hai do cheezon ki same hau yah nhi or isme kaffi gliches bhi hai !

// === value ke sath sath uska type bhi check krta hai or accuarate answer deta hai !


if(s === m){
    console.log("equal hai ");
}

else{
    console.log("not equal !");
}


// agar kisi bhi value ko uske truthy yah falsy nature me lana ho toh !! lagado yah Boolean laagli isse woh apne nature me ajayega !


let x = !!"";

if(x == true){
    console.log("if chelga ");
}

else {
    console.log("else chalega !");
}


let  z = 0;
if(!!z){
    console.log("true !");
}

else{
    console.log("false !");
}




// boolean se or !! se kisi bhi condition ko uske truthy yah false jo bhi nature hot haoga usme convert krskte hai doston !!


if("samad"){
    console.log("me truthy nature se hoo !");
}

else{
    console.log("me falsy nature se hoo !");
}

// || aaap use kr skte ho jab aaap ko kisi do value mese ek chaiye ,
// kuch is manner me agar answer na mile toh null mile
// 

// jab bhi aap chate ho ki mere liye ek calculation  kro aur agar us calci ka answer ajaeye toh variable me woh save krna nahi toh agar us calc ka answer falsy aye toh phir falsy mt rkhna uske jagah null yah jo or kuch aap chate ho woh print krdena


// jab aapko esa kuch chauye ki agar value me falsy value nahi ho toh wohi value dena nahi toh aap null yah uske against me jo value rakhi ho woh print krdena okay 


var name  =     ""    ||   null




