// array of objects in js 


var arrayobjects = [
    {
        name: "Samad",
        age: 10,
        single: true,
    }
    ,
    {
    
        status : "high",
        marraigestatus : false

    },

    {
           passion: "develoeper",
           career : "entereprenaur"

    }
]


console.log(arrayobjects)
arrayobjects.name = "syed samad ali"
console.log(arrayobjects)


arrayobjects.status = "low";



// methods is something jiski properties ki value me fucntion ho use methods kehte hai js mein


var array = {
    name : "syed samd ali",
    college  : "sirt",
    degree : "btech",
    profession : "tech enthusiasist",
    jobs : function(role){
        console.log(role)
        console.log("hello i am learning a mern stack development from the sheriyans coding school")

    }
    
}

var ans = array.jobs("programmer")


// foreach: foreach bhi ek method hoti hai js mein jo loop ki tarah kaam krta hai 

var arr = [1,2,3,4,5,6,7]

var sum = 0;
arr.forEach(function(elem){

    sum  = sum  + elem;
})

console.log(sum)







