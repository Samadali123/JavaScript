
// for each array pe chalta hai or array ke ek ek member pe chalta hai ek ek  bar
// for each ek method hoti hai jo array ke liye hoti hai 
var arr = [ 1,2 ,3,4,5];
var sum = 0;
arr.forEach(function(elem){
    
sum = sum  + elem; 
})

console.log("sum of array elements using foreach method is ", sum)


/// map : map ka matlab array ek ek member pe koi calculation krni ho toh us calcualion ko ek naye array me save krnna ho toh map method use kra skte hai 
// [1,2,3,4,5]  = adding two in every elements of array  [ 3,4,5,6,7,]


// map basicallly tb use me ata  hai jab apko ek ek member pe koi calculation yah changes krna ho or uska resultant answe ek new array me save hojata hai return hoke

// map me return krna compusory jo new array ko leke ayega phir use baad me kisis variable me save krskte hai 


var maparray = [1,2,3,4,5]
var ans = maparray.map(function(val){

     return  val+2;
})


console.log("array element after map is ", ans)

// foreach array ki method hoti hai jis tarah map hota or filter hota hai for each array ke ek ek member pe chalta hai or jitne memembes hote hai utne hi baar chalta hai foreach method or isme return krna koi compulsory nhi hai usme usi array me changes ata hai balki map me return krna compulsory hai or naya array bhi create hota hai 

// jab bhi array hota hai or apko uske har member par jana hai or usme se uske kiis member ko place krna ho naya array me or kisi ko nahi toh use kehter hai filter js mein 
// filter js me map ke bhai jesa hota hai jo filter krta jata hai array me se kisi bhi true condition ki basis pe or us filte kre hue array ko new array me save krta jata  jataa hai 


var  arrrrrrrr  = [ 1,2,3,4,5,,6,12,14,16,18,20,22,23,24,10]
var answer  = arrrrrrrr.filter(function(elem){
        
        return elem%2 === 0

})

console.log(answer)



//array me foreach , map , filter  or inki tarah hi ek or method hoti hai jisko  Array.reduce method kehte hai js mein


// reduce method me bad 2 value pass krne  padhti hai accumulator or curentvalue ..

// accumulator woh hota hai jo value ko jayza krta hai stored krte  hue chalta hai 
// current value array me current value ko read krte rehta hai  

// yeh array ko reduce krne ke kaam ata hai 

var numbers = [1,2,3,4,5]

 var output = numbers.reduce(function(accumulator, curentvalue){

    return  accumulator =  accumulator + curentvalue;

}, 0)

console.log(output)














