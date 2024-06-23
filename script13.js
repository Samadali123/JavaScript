// objects in js : is  a reference type data type which stores values in the form of key value pairs and its holds the infor of one entity or a object 



// var obj = {}  // black object

// var obj1 = {
//     name : "Samad",
//     age :20,
//     rollno : "57",
//     issingle : true,
//     college : "sirt",
//     locality : "bhopal",
//     class : function(){
//         console.log("hello im a method in js in the objects")
//     }

// }

// console.log(obj1)
// console.log(obj1.name)
// console.log(obj1.college)
// console.log(obj1.class())

// method is something whose value is a function in a particular property :



// funtions in a js is most important topic : it is used to reuse , reuse with further , resue with differnet differnet data or  arguments 



// function name(user){
//     console.log("hello , my name is", user);
// }

// name("syed samad ali");
// name("samad ali")
// name("salim bhoiiii")


// first class fucntions in js : jab aap fucntion ko normal variable ki tarah treat krte ho us fnc ko first classs fnc kaha jaata hai js mein , aap fns ko save krskte ho in the form of the variables

// js me jo fns hote hai woh sab fns hote hai first class fns 
// aap first class fns me as an arhument koi fns pass kro toh use bhi first class fns bola jaata hai..

// var hello = function(){
//     console.log("hello function chala a");
// }

// hello()


// var firstclassfn = function(priintingfns){
        
//     priintingfns();
    
// }

// firstclassfn(function(){console.log("hello im a first class fns  in the js")});


//jab bhi aap constructor fns banayenge or aapka goal hoga  us  constructor fns ke basics pr uski multiple copies jinko ham instances kehte hai, tab role me ayega new keyword ..


//new keyword : jab bhi newkwyword banta hai tab ek blank object banta hai ,ab new ke aghe jo fns likha hai use chalao or uske andar jaha jaha this likha ho waha wahaa this ke aghe likhi hui cheezein  us black object mein property manlena jo value us constructor fns me set ho woh is blank object me bhi properties set hojayengi...


function biskitmaker(){

    this.name =  "samad ali";
    this.age =  20;
    this.work  = "developer";
    this.rollno = 57;
    this.college = "sirt";

}

var ans = new  biskitmaker();
console.log(ans)



// constructor fns :asia fns jiska kaam hi hai us fns ko chala kar naye naye objects banana, kyoki wo fns chalte waqt new keyword ke saath chalta hai and iski wajah se wo fns haar baar ek new object bana deta hai .


function constructorfns(){
    this.name = "syed samad ali ";
    this. profession = "programmer";

}


var output = new constructorfns();
console.log(output)






