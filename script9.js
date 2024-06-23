// return keyword  use hota hai fucntions pe jab functions ko calll kroge toh kuch return krne ke liye return keyword use hota hai !

// return mtlb jo daloge woh wapis bhi ayega !


function abcd(name){
    return name;
}

var answer = abcd("saaad");
console.log(answer);



function array(list,index){
    list.splice(index,1);
    return list;
}


var newlist = array([1,2,3,4,5,6,7,8,9,10], 6);
console.log(newlist);


function username(name,age,passion,status){

    var  data = [name,age,passion,status];
    return data;

}


var details = username("Samad", 20,"coder", "single");
details[3] = "marrried";

console.log(details);





