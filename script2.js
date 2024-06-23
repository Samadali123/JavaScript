// // javascipt two main versiobns  : es5 and es6, 

// // es5 and es6 are versins of js es5 is older version whereas es6 is newer versiobn/

// In es5 : var is mostly used for a variable 
// In es6 : let and cost use for a variable/


// Var is a nearest function variable  ()
// let is a variable which runs in a specific braces only {}


var a  = 12;
var b = a;

console.log(b);

let c = [1,2,3,4,5];
console.log(c);
// agar primitve type ho toh same copy hojayega or jisme copy hoga pop yah operation se usi ke elements sirf pop honge .

let d = c;
console.log(d);
d.pop();

// agar reference type ho toh same copy hojaygaa pr uske sath satb jo copy hua hai uske elemnts bhi pop homge.

console.log(d);
console.log(c);



let e = [6,7,8,9];
let f = [...e];
// agar same copy krna hai or jisko copy krna hai toh spreead ... operator ka use se hoga easily !!/

console.log(f);
f.pop();
console.log(f);
console.log(e);




