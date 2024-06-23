// array ek taqat hoti jo ek se zyada chhheze ko hold krke rkh sakra hai !
/// ab yeh same or different types ki value hold krskta hai ...
// js me arrays mein ap strings numbers or bhi koibhi data type ke combimations ko dalskte ho theek hai !

// same type ka array !
// var array = [1,2,3,4,5,6,7,8,9,10];
// console.log(array);

/// diffenent type ka array !

var different = [1,2,3,"hello","samad",23];
console.log(different);


// array methods :
// pop, push,length,shift,unshift,splice,spreadoperators.

console.log(different.length);
different.push(10);
console.log(different);
different.pop();
console.log(different);
different.shift();
console.log(different);
different.unshift(100);
console.log(different);
different.splice(3,1);
console.log(different);


// spread opertor  kisi bhi array ko copy krleta haii ... or fir us array ko update kroge toh jis array ko copy kra hai usme koi change nhi ayega !..

// spread operator use hota hai actual copy krne ke liye refernce type ke data ki



var newarray = [...different];
console.log(newarray);


